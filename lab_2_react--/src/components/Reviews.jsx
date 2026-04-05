import { useState, useEffect } from 'react';

/**
 * Reviews component — Lab 4 Task 2: Fetch API
 * Uses useEffect to fetch comments from JSONPlaceholder (variant 5),
 * stores result in useState, renders via .map().
 */
export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5/comments');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="card">
      <div className="section-title">Reviews &amp; Comments</div>
      <p className="section-desc">
        Comments loaded from JSONPlaceholder API (post #5):
      </p>

      {loading && (
        <p className="comments-loading">⏳ Loading comments...</p>
      )}

      {error && (
        <p className="comments-error">❌ Failed to load comments: {error}</p>
      )}

      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <div className="comment-name">{comment.name}</div>
            <div className="comment-email">{comment.email}</div>
            <div className="comment-body">{comment.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
