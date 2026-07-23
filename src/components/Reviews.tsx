import React, { useState } from 'react';
import { REVIEWS_LIST, SCHOOL_DETAILS } from '../data/schoolData';
import { Review } from '../types';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp, X, Send } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_LIST);
  const [filterRating, setFilterRating] = useState<number>(0); // 0 = all
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    relation: 'Parent',
    rating: 5,
    comment: ''
  });

  const filteredReviews = filterRating === 0
    ? reviews
    : reviews.filter(r => r.rating === filterRating);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.comment.trim()) return;

    const created: Review = {
      id: Date.now().toString(),
      author: newReview.author,
      relation: newReview.relation,
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      verified: true
    };

    setReviews([created, ...reviews]);
    setIsModalOpen(false);
    setNewReview({ author: '', relation: 'Parent', rating: 5, comment: '' });
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            Verified Ratings & Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900">
            Trusted by Parents & Alumni in Visakhapatnam
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            St Anny High School is rated <strong>4.1 stars based on 31 customer reviews</strong>. Here is what our parents, students, and community members say about our English medium ICSE & State Board education.
          </p>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-slate-800">
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6 space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-serif">4.1</span>
              <div className="text-left">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4].map(i => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <Star className="w-5 h-5 fill-amber-400/30 text-amber-400" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Out of 5 Stars</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 pt-2 font-semibold">Based on 31 Verified Reviews</p>
            <p className="text-[11px] text-slate-400">St Anny High School, Murali Nagar</p>
          </div>

          <div className="md:col-span-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-sm font-bold text-amber-300">High Academic & Safety Ratings</h3>
              <p className="text-xs text-slate-300">
                Strong reputation for discipline, English medium standards, dedicated teachers, and clean campus washroom facilities.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow transition-all shrink-0 flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase">Filter:</span>
            <button
              onClick={() => setFilterRating(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterRating === 0 ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterRating === 5 ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              5 ★ Only
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                filterRating === 4 ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              4 ★ Only
            </button>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredReviews.length} reviews
          </span>
        </div>

        {/* Reviews List Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500">{rev.relation}</p>
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified Parent
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200 space-y-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Parent Feedback</span>
              <h3 className="text-xl font-serif font-bold text-slate-900">Share Your Review</h3>
            </div>

            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  placeholder="e.g. Mrs. Swathi Reddy"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Relation to School</label>
                <select
                  value={newReview.relation}
                  onChange={(e) => setNewReview({ ...newReview, relation: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900 focus:outline-none"
                >
                  <option value="Parent of Primary Student">Parent of Primary Student</option>
                  <option value="Parent of High School Student">Parent of High School Student</option>
                  <option value="Parent of Kindergarten Student">Parent of Kindergarten Student</option>
                  <option value="Alumnus / Former Student">Alumnus / Former Student</option>
                  <option value="Visitor / Local Resident">Visitor / Local Resident</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Rating (1 to 5 Stars)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`p-2 rounded-lg border text-xs font-bold flex items-center gap-1 ${
                        newReview.rating >= star
                          ? 'bg-amber-100 border-amber-300 text-amber-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${newReview.rating >= star ? 'fill-amber-500 text-amber-500' : ''}`} />
                      {star}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Feedback / Experience *</label>
                <textarea
                  required
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share details about academics, teachers, facilities, or campus discipline..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs focus:ring-2 focus:ring-blue-900 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
