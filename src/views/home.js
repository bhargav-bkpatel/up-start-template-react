import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Up Start Template</title>
        <meta property="og:title" content="Up Start Template" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <span className="brand-Name">
              <span className="home-text01">UP -</span>
              <span> START</span>
            </span>
          </div>
          <div className="home-links">
            <span className="home-text03 navbar-Link">How it works</span>
            <span className="home-text04 navbar-Link">Features</span>
            <span className="home-text05 navbar-Link">Blog</span>
            <span className="home-text06 navbar-Link">Pricing</span>
            <button className="button-secondary button">Log in</button>
            <button className="button button-primary">Get started</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              up-start finance system
            </span>
            <h1 className="home-title">
              <span className="home-text07">
                Unlock the next generation banking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">experience</span>
            </h1>
            <span className="home-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container01">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/hero-600w.png"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/group%2020-1200w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text09 before-Heading">how it works</span>
            <h1 className="home-text10">
              <span className="home-text11">
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text12">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">than ever.</span>
              <span className="home-text14"></span>
            </h1>
            <span className="home-text15">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 before-Heading">save money</span>
            <h1 className="home-text17">
              <span className="home-text18">Earn cashback</span>
              <br></br>
              <span className="home-text20">from your favorite brands</span>
            </h1>
            <span className="home-text21">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="home-container03">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/group%2021-1200w.png"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text22 before-Heading">get started</span>
            <h1 className="home-text23">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text24">1</span>
              </div>
              <div className="home-container04">
                <span className="home-title1">Download UpStart App</span>
                <span className="home-text25">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text26">2</span>
              </div>
              <div className="home-container05">
                <span className="home-title2">Create your free account</span>
                <span className="home-text27">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text28">3</span>
              </div>
              <div className="home-container06">
                <span className="home-title3">
                  Link your existing credit cards
                </span>
                <span className="home-text29">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text30 before-Heading">get started</span>
          <h1 className="home-text31">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name2"></Card>
            <Card text="Personal" rootClassName="card-root-class-name"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text34 before-Heading">faq</span>
              <h1 className="home-text35">
                <span className="home-text36">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text38">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text39">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text40">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text41">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text42">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text43">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text44">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text45">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text46">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image6"
            />
          </div>
          <div className="home-banner">
            <span className="home-text47 before-Heading">get started</span>
            <h1 className="home-text48">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text54">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btns">
              <button className="home-button6 button button-transparent">
                See all plans
              </button>
              <button className="home-button7 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text58">Product</span>
              <span className="home-text59">How it works</span>
              <span className="home-text60">Features</span>
              <span className="home-text61">Pricing</span>
              <span className="home-text62">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text64">App</span>
              <span className="home-text65">Download iOS app</span>
              <span className="home-text66">Download Android app</span>
              <span className="home-text67">Log in to Portal</span>
              <span className="home-text68">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text70">Company</span>
              <span className="home-text71">About us</span>
              <span className="home-text72">Culture</span>
              <span className="home-text73">Code of conduct</span>
              <span className="home-text74">Careers</span>
              <span className="home-text75">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text77">Invest</span>
              <span className="home-text78">Commodity</span>
              <span className="home-text79">Savings</span>
              <span className="home-text80">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text83">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text86">Security</span>
              <span className="home-text87">Security status</span>
              <span className="home-text88">ISO</span>
              <span className="home-text89">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text91">Follow</span>
              <span className="home-text92">Instagram</span>
              <span className="home-text93">Twitter</span>
              <span className="home-text94">Facebook</span>
              <span className="home-text95">Tik Tok</span>
              <span className="home-text96">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
