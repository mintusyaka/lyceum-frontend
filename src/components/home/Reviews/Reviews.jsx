import React, { useState, useEffect } from 'react';
import { Star, Send, User, Calendar, CheckCircle } from 'lucide-react';

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    rating: 5,
    reviewText: '',
    email: ''
  });

  // Завантаження відгуків з бекенду
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://localhost:7036/api/reviews');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Помилка завантаження відгуків:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7036/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parentName: formData.parentName,
          studentName: formData.studentName,
          rating: formData.rating,
          reviewText: formData.reviewText,
          email: formData.email
          // Не передаємо createdAt, нехай бекенд встановлює дату
        })
      });

      if (response.ok) {
        const createdReview = await response.json();

        setReviews(prev => [createdReview, ...prev]); // додаємо новий відгук зверху
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            parentName: '',
            studentName: '',
            rating: 5,
            reviewText: '',
            email: ''
          });
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error('Помилка при збереженні:', errorText);
      }
    } catch (error) {
      console.error('Помилка надсилання відгуку:', error);
    }
  };

  const renderStars = (rating, interactive = false, onStarClick = null) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onStarClick && onStarClick(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Відгуки батьків</h3>
          <p className="text-lg text-gray-600">Дізнайтеся, що кажуть батьки про навчання в нашому ліцеї</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reviews Display */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Відгуки наших батьків</h4>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6 max-h-96 overflow-y-auto">
                {reviews.map((review) => (
                  <div key={review.id || review._id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-semibold text-gray-900">{review.parentName}</h5>
                          {renderStars(review.rating)}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>Батько/мати учня {review.studentName}</span>
                          {review.grade && <span className="ml-2">• {review.grade}</span>}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{review.reviewText}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(review.createdAt).toLocaleDateString('uk-UA')}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Review Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Залишити відгук</h4>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h5 className="text-xl font-semibold text-gray-900 mb-2">Дякуємо за відгук!</h5>
                <p className="text-gray-600">Ваш відгук буде опублікований після модерації</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="parentName">Ваше ім'я</label>
                    <input
                      id="parentName"
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="studentName">Ім'я дитини</label>
                    <input
                      id="studentName"
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email (не буде опублікований)</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Оцінка</label>
                  <div className="flex items-center space-x-2">
                    {renderStars(formData.rating, true, handleRatingChange)}
                    <span className="text-sm text-gray-500 ml-2">({formData.rating}/5)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reviewText">Ваш відгук</label>
                  <textarea
                    id="reviewText"
                    name="reviewText"
                    value={formData.reviewText}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Поділіться вашим досвідом навчання дитини в нашому ліцеї..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Надіслати відгук
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600">Середня оцінка</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-2">{reviews.length}</div>
            <p className="text-gray-600">Відгуків батьків</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-2">98%</div>
            <p className="text-gray-600">Рекомендують ліцей</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
