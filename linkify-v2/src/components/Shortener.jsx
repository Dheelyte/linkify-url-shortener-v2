// LinkShortener.js
import React, { useState } from 'react';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const baseUrl = 'https://shrt.ink/';

  const validateAlias = (alias) => {
    const regex = /^[a-zA-Z0-9_-]+$/;
    return regex.test(alias);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!url) {
      setError('Please enter a URL');
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }

    if (customAlias && !validateAlias(customAlias)) {
      setError('Custom alias can only contain letters, numbers, underscores, and hyphens');
      return;
    }

    try {
      // Simulated API call
      const generatedAlias = customAlias || Math.random().toString(36).substr(2, 7);
      const finalUrl = `${baseUrl}${generatedAlias}`;
      setShortUrl(finalUrl);
      setUrl('');
      setCustomAlias('');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <main className="main-content">
      <div className="form-wrapper">
        <div className="form-container">
          <h1 className="form-title">Linkify URL Shortener</h1>
          {shortUrl && (
              <div className="result-container">
                <p className="success-message">Your shortened URL:</p>
                <div className="result-group">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="short-url"
                  >
                    {shortUrl}
                  </a>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="copy-button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          <form onSubmit={handleSubmit} className="shorten-form">
            <div className="form-group">
              <label htmlFor="url-input" className="input-label">
                Original URL
              </label>
              <input
                id="url-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very-long-url"
                className="url-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="custom-alias" className="input-label">
                Custom Back-Half (optional)
              </label>
              <div className="alias-input-group">
                <span className="alias-prefix">{baseUrl}</span>
                <input
                  id="custom-alias"
                  type="text"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  placeholder="your-custom-alias"
                  className="alias-input"
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="shorten-button">
              Create Short URL
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Shortener;