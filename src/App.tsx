
import React, { FormEvent, useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    challenges: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const submitButton = document.querySelector('.form-button') as HTMLButtonElement;
    
    // Change button text and disable it
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    
    fetch('https://script.google.com/macros/s/AKfycbxawys1WiVslidpti74dKe_4nZ9K4GRqcBxCbvYqJTa3oDDJ_EIDiC_u8U-7q9Qa9jf/exec', {
        method: 'POST',
        body: formDataObj
    })
    .then(response => {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          challenges: ''
        });
        
        // Show success message
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <>
      <div className="hero-container">
        <div className="content-left">
          <h1 className="headline">Rock-Solid Marketing.<br/>Unshakable Results.</h1>
          <p className="subheadline">Turn your digital presence into a foundation for sustainable business growth.</p>
          <a href="#form" className="cta-button">Build Your Foundation →</a>
        </div>

        <div className="content-right">
          <div className="stats-card">
            <div className="growth-number">+42%</div>
            <h3>Monthly Growth</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">+119%</div>
                <div className="stat-label">New Leads</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">+64</div>
                <div className="stat-label">Social Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3 className="service-title">Lead Generation</h3>
            <p className="service-description">Transform your digital presence into a lead-generating machine with our proven strategies and tools.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3 className="service-title">Ads Management</h3>
            <p className="service-description">Target your ideal customers with precision using our data-driven advertising strategies.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Analytics & Reporting</h3>
            <p className="service-description">Gain clear insights with comprehensive reporting that shows the real impact of your marketing efforts.</p>
          </div>
        </div>
      </section>

      <section className="why-it-works" id="why-it-works">
        <h2 className="section-title">Why It Works</h2>
        <div className="why-it-works-grid">
          <div className="why-it-works-item">
            <div className="why-it-works-icon">⚡</div>
            <h3 className="why-it-works-title">Data-Driven Approach</h3>
            <p className="why-it-works-text">We make decisions based on real data, not guesswork, ensuring every dollar spent brings maximum return.</p>
          </div>
          <div className="why-it-works-item">
            <div className="why-it-works-icon">🔍</div>
            <h3 className="why-it-works-title">Targeted Strategies</h3>
            <p className="why-it-works-text">We focus on reaching the right audience with the right message at the right time.</p>
          </div>
          <div className="why-it-works-item">
            <div className="why-it-works-icon">🔄</div>
            <h3 className="why-it-works-title">Continuous Optimization</h3>
            <p className="why-it-works-text">We never stop improving, constantly refining our approach based on performance metrics.</p>
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="form-container">
          <h2 className="form-title">Get Your Free Strategy Call</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input className="form-input" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="website">Website URL</label>
              <input className="form-input" type="url" id="website" name="website" value={formData.website} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="challenges">What are your main challenges?</label>
              <textarea className="form-textarea" id="challenges" name="challenges" value={formData.challenges} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="form-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default App;
