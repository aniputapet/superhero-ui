<template>
  <div class="landing-page-container">
    <header class="main-navigation">
      <nav>
        <div class="nav-logo">
          <RouterLink :to="{ name: 'landing' }">
            <img alt="Logo" src="../assets/landing/logo.svg">
          </RouterLink>
        </div>
        <div class="nav-menu">
          <ul class="links">
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="login">
            <a href="#">Log in</a>
          </div>
          <div class="join">
            <RouterLink :to="{ name: 'feed' }">
              Get started
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <header class="section-1">
        <div class="section-content">
          <div class="section-1-header">
            <h3>Social Media With No Hidden Agenda</h3>
            <h1>Superhero is the <b>world’s first decentralized,</b> <b>open-source</b> social media platform.</h1>
            <p>
              No censorship, no tracking, and no interference — Superhero is for everyone, by everyone.
            </p>
          </div>
          <div class="section-1-join">
            <RouterLink :to="{ name: 'feed' }">
              Become a Superhero Today
            </RouterLink>
          </div>
          <div class="section-1-image">
            <VueAos animation-class="animate__animated animate__fadeInUp">
              <img alt="" src="../assets/landing/superhero-mockup.png">
            </VueAos>
          </div>
        </div>
      </header>
      <section class="section-2">
        <div class="section-content">
          <div class="section-2-header">
            <div class="section-2-header-icon">
              <VueAos animation-class="fadeIn animated">
                <img alt="" src="../assets/landing/icon-share.svg">
              </VueAos>
            </div>
            <div class="section-2-header-title">
              <h3>Privacy First</h3>
              <h2><b>Share your story —</b> not your data</h2>
            </div>
            <p class="section-2-header-description">
              Superhero is driven by <b>privacy-focused</b> blockchain technology — Superhero <b>won’t share</b> your
              private data and can’t share your information with big data companies.
            </p>
          </div>
          <VueAos animation-class="animate__animated animate__fadeIn">
            <div class="section-2-slider">
              <ul>
                <li>
                  <div class="section-2-slide-left">
                    <div class="slide-icon">
                      <img alt="" src="../assets/landing/feature1.svg">
                    </div>
                    <h4 class="slide-title">
                      Voting
                    </h4>
                    <p class="slide-text">
                      Superhero Meet is the world’s first truly decentralized social meeting platform that allows
                      real-time decentralized tipping. Create your own Superhero Meet conference room and join fellow
                      Superheroes to collaborate
                    </p>
                  </div>
                  <div class="section-2-slide-right">
                    <img alt="" src="../assets/landing/slide1.png">
                  </div>
                </li>
              </ul>
            </div>
          </VueAos>
          <div class="section-2-stats">
            <VueAos animation-class="animate__animated animate__fadeInUp">
              <div>
                <h4>+22K</h4>
                <p><b>Superhero</b> is the world’s first fully decentralized</p>
              </div>
            </VueAos>
            <VueAos animation-class="animate__animated animate__fadeInUp">
              <div>
                <h4>+22K</h4>
                <p>Superhero is the <b>world’s first</b> fully decentralized</p>
              </div>
            </VueAos>
            <VueAos animation-class="animate__animated animate__fadeInUp">
              <div>
                <h4>+22K</h4>
                <p>Superhero is the world’s first fully <b>decentralized</b></p>
              </div>
            </VueAos>
            <VueAos animation-class="animate__animated animate__fadeInUp">
              <div>
                <h4>+22K</h4>
                <p>Superhero is the <b>world’s first</b> fully decentralized</p>
              </div>
            </VueAos>
          </div>
        </div>
      </section>
      <section class="section-3">
        <VueAos animation-class="animate__animated animate__fadeInUp">
          <div class="section-content">
            <div class="section-3-text">
              <VueAos animation-class="animate__animated animate__delay-1s animate__zoomIn">
                <h3>Tipping</h3>
              </VueAos>
              <h2><b>Send tips to anyone —</b><br>anywhere online</h2>
              <p>
                Superhero is the world’s first fully decentralized tipping platform that allows anybody to tip anyone,
                anywhere online. Collect tips for the content you create, send tips to the creators you support, or tip
                your favourite YouTubers, blogs, websites, platforms, or causes.
              </p>
              <p class="quote">
                "Superhero is the world's first fully decentralized tipping platform that allows anybody
                to tip anyone, anywhere online. Collect tips for the content you create"
              </p>
              <p class="cite">
                <b>Superhero</b> is the world’s first
              </p>
              <img alt="" class="ae-logo" src="../assets/landing/ae-logo.svg">
            </div>
            <div class="section-3-graphic">
              <VueAos animation-class="animate__animated animate__delay-1s animate__fadeIn animate__zoomIn">
                <img alt="" src="../assets/landing/globe.svg">
              </VueAos>
            </div>
          </div>
        </VueAos>
      </section>
      <section class="section-4">
        <VueAos animation-class="animate__animated animate__fadeInUp">
          <div class="section-content">
            <div class="section-4-text">
              <h3>Tokenization</h3>
              <h2>
                Superhero’s Tokenization features allow anybody to create <b>blockchain-powered tokens</b> for any
                application. Use Superhero to create tokens for specific projects, community groups, ideas,
                or virtually any purpose imaginable
              </h2>
              <ul>
                <li>Simple, accessible tokenization</li>
                <li>For anyone & anything</li>
                <li>Powered the æternity blockchain</li>
                <li>No development skills needed</li>
              </ul>
            </div>
          </div>
        </VueAos>
      </section>
      <section class="section-5">
        <VueAos animation-class="animate__animated animate__fadeInUp">
          <div class="section-content">
            <div class="section-5-text">
              <h2>Send <b>crypto to anyone —</b> anywhere online</h2>
              <p>
                Superhero is the world’s first fully decentralized tipping platform that allows anybody to tip anyone,
                anywhere online. Collect tips for the content you create, send tips to the creators you support, or tip
                your favourite
              </p>
              <div class="section-5-features">
                <div class="feature">
                  <img alt="" src="../assets/landing/feature1.svg">
                  <h4>Superhero Meet</h4>
                  <p>
                    Superhero Meet is the world’s first truly decentralized social meeting platform that allows
                    real-time decentralized tipping. Create your own Superhero Meet conference room and join fellow
                    Superheroes to collaborate, launch missions, or form your own Superhero League — no account or
                    personal details necessary!
                  </p>
                </div>
                <div class="feature">
                  <img alt="" src="../assets/landing/feature2.svg">
                  <h4>Superhero Voting</h4>
                  <p>
                    Voting allows any Superhero community member to vote on any topic through the Superhero governance
                    æpp. With Superhero Voting, it’s possible to create polls and vote on anything, delegate your votes
                    to other community members, or collect voting power from the Superhero community.
                  </p>
                </div>
                <div class="feature">
                  <img alt="" src="../assets/landing/feature3.svg">
                  <h4>Superhero League</h4>
                  <p>
                    Superhero League is a weekly virtual gathering in which Superhero community members join together to
                    discuss events, topics, or ideas. Join the weekly Superhero League, or create your own League with
                    your friends!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </VueAos>
      </section>
      <section class="section-6">
        <VueAos animation-class="animate__animated animate__fadeInUp">
          <div class="section-content">
            <div class="section-6-text">
              <h3>Tipping</h3>
              <h2><b>Send tips to anyone —</b><br>anywhere online</h2>
              <p>
                Superhero is the world’s first fully decentralized tipping platform that allows anybody to tip anyone,
                anywhere online. Collect tips for the content you create, send tips to the creators you support, or tip
                your favourite YouTubers, blogs, websites, platforms, or causes.
              </p>
              <div>
                <p class="quote">
                  "Superhero is the world’s first fully decentralized tipping platform that allows anybody to tip
                  anyone, anywhere online. Collect tips for the content you create"
                </p>
                <p class="cite">
                  <b>Superhero</b> is the world’s first
                </p>
                <p>
                  <img alt="" class="ae-logo" src="../assets/landing/ae-logo.svg">
                </p>
              </div>
            </div>
          </div>
        </VueAos>
      </section>
      <section class="section-7">
        <VueAos animation-class="animate__animated animate__fadeInUp">
          <div class="section-content">
            <img alt="" src="../assets/landing/join_superhero_looper.png">
          </div>
        </VueAos>
      </section>
    </main>
    <footer>
      <VueAos animation-class="animate__animated animate__fadeInUp">
        <div class="section-content">
          <div class="footer-row-1">
            <div class="footer-slogan">
              <b>Superhero Meet is the world’s first truly</b><br>decentralized social meeting platform
            </div>
            <div class="footer-form">
              <form
                  action="https://aeternity.us15.list-manage.com/subscribe/post?u=83a504836fa768f10619d053c&id=c2d8c3ba71"
                  class="subscribe" method="post" target="_blank"
              >
                <label><input name="EMAIL" placeholder="Get started" type="email"></label>
                <button name="subscribe" type="submit">Subscribe now</button>
              </form>
            </div>
          </div>
          <div class="footer-row-2">
            <div class="footer-logo">
              <img alt="" src="../assets/landing/superhero-logo-black.svg">
            </div>
            <div class="footer-copyright">&copy; 2020 Superhero.com</div>
            <div class="footer-menu">
              <ul class="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </VueAos>
    </footer>
  </div>
</template>

<script>
import VueAos from 'vue-aos';

export default {
  components: { VueAos },
  metaInfo: {
    title: 'Welcome',
  },
};
</script>

<style lang="scss">
:root {
  --animate-duration: 0.5s;
}

.landing-page {
  background: #f2f2f2;
  color: #000;
  font-family: Oxygen, sans-serif;
  margin: 0 auto;
  max-width: 100vw !important;
}
</style>
<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.main-navigation {
  align-items: center;
  background: #000;
  display: flex;
  height: 50px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 22;
}

nav {
  color: #fff;
  display: flex;
  justify-content: space-between;
  max-width: 1644px;
  width: 100%;
}

.nav-logo {
  display: flex;
}

.nav-menu {
  align-items: center;
  display: flex;
}

.links {
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    font-size: 14px;
    line-height: 16px;
    margin: 0 10px 0 0;
    padding: 0;
  }

  a:hover {
    text-decoration: underline;
  }
}

.login {
  font-size: 14px;
  line-height: 16px;
  margin-left: 54px;
  margin-right: 20px;
  text-shadow: 0 0 0 #fff;

  a:hover {
    text-decoration: underline;
  }

}

.join a {
  background: #1161fe;
  border: 1px solid #0043b3;
  border-radius: 4px;
  color: #fff;
  filter: drop-shadow(-20px 2px 44px rgba(0, 0, 0, 0.5));
  font-size: 14px;
  line-height: 16px;
  padding: 7px 17px;
  text-decoration: none;
}

h1 {
  font-family: IBM Plex Sans, sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.57931px;
  line-height: 70px;
  margin: 0;
}

h2 {
  font-family: IBM Plex Sans, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 50px;
  margin: 0;
}

h3 {
  font-family: Oxygen, sans-serif;
  font-size: 12px;
  letter-spacing: 0.8px;
  line-height: 14px;
  margin: 0 0 12px;
  opacity: 0.6;
  text-shadow: 0 0 0 #000;
  text-transform: uppercase;
}

section, footer {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.section-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1140px;
  width: 100%;
}

.section-1 {
  align-items: center;
  background-color: #000;
  background-image: url("../assets/landing/header-pattern.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 920px;
  overflow: hidden;
  padding-top: 100px;
  position: relative;

  h1 {
    margin-bottom: 16px;
  }

  p {
    color: #fff;
    font-size: 20px;
    line-height: 23px;
    opacity: 0.8;
  }

  .section-1-join {
    position: absolute;
    top: 380px;

    a {
      background: #1161fe;
      border: 1px solid #0043b3;
      border-radius: 4px;
      color: #fff;
      filter: drop-shadow(-20px 2px 44px rgba(0, 0, 0, 0.5));
      font-size: 16px;
      line-height: 20px;
      padding: 12px 56px;
      text-decoration: none;
      text-shadow: 0 0 0 #fff;
    }
  }

  .section-1-image {
    display: flex;
    flex-basis: 100%;
    justify-content: center;

    img {
      align-self: flex-end;
    }
  }
}

.section-2 {
  background: #f2f2f2;
  padding-top: 162px;

  .section-2-header {
    align-items: flex-end;
    display: flex;
  }

  .section-2-header-title {
    display: flex;
    flex-basis: 346px;
    flex-direction: column;
    margin-left: 39px;
  }

  .section-2-header-description {
    flex-basis: 550px;
    font-size: 18px;
    line-height: 32px;
    margin-left: 49px;
  }

  .section-2-slider {
    display: flex;
    margin-bottom: 50px;
    margin-top: 63px;
    width: 100%;

    ul {
      border-radius: 6px;
      display: flex;
      height: 530px;
      margin: 0;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 100%;
    }

    li {
      border-radius: 6px;
      display: grid;
      grid-template-columns: 353px auto;
      height: 100%;
      position: relative;
      width: 100%;
    }
  }

  .section-2-slide-left {
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 60px;
    position: absolute;
    width: 353px;
    z-index: 2;

    h4 {
      font-size: 22px;
      line-height: 40px;
      margin-bottom: 6px;
      margin-top: 0;
    }

    p {
      font-size: 16px;
      line-height: 27px;
      opacity: 0.6;
    }

    .slide-icon {
      margin-bottom: 20px;
    }
  }

  .section-2-slide-right {
    background: #1c1c1c;
    display: flex;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .section-2-stats {
    display: grid;
    grid-column-gap: 63px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    h4 {
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 10px;
      margin-top: 0;
    }

    p {
      font-size: 16px;
      line-height: 27px;
      margin: 0;
    }
  }
}

.section-3 {
  background: #f2f2f2;
  padding-bottom: 160px;
  padding-top: 130px;

  .section-content {
    flex-direction: row;
  }

  .section-3-text {
    margin-right: 120px;
    width: 50%;

    h2 {
      margin-bottom: 21px;
    }

    p {
      font-size: 18px;
      line-height: 32px;
    }

    .quote {
      font-size: 16px;
      line-height: 27px;
      margin: 40px 16px 30px 30px;
    }

    .cite {
      margin-bottom: 10px;
      margin-left: 30px;
    }

    .ae-logo {
      margin-left: 30px;
    }

  }

  .section-3-graphic {
    width: 50%;
  }
}

.section-4 {
  background-color: #000;
  background-image: url("../assets/landing/green-cubes-bg-pattern.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  height: 598px;
  padding: 123px 0 121px;

  .section-4-text {
    margin-left: 100px;
    max-width: 885px;

    ul {
      font-size: 20px;
      line-height: 40px;
      padding-left: 20px;
    }

    li:nth-child(1) {
      color: #dab5f7;
    }

    li:nth-child(2) {
      color: #9cf0f0;
    }

    li:nth-child(3) {
      color: #a7f1b8;
    }

    li:nth-child(4) {
      color: #d8f09b;
    }
  }
}

.section-5 {
  background-color: #000;
  color: #fff;
  padding: 150px 0 180px;

  h2 {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;

    b {
      color: #fff;
    }
  }

  .section-5-text p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 20px;
    line-height: 32px;
  }

  .section-5-features {
    display: flex;
    margin-top: 80px;
    width: 100%;

    img {
      margin-bottom: 20px;
    }

    h4 {
      color: #fff;
      font-size: 22px;
      line-height: 40px;
      margin: 0 0 10px 0;
    }

    p {
      font-size: 16px;
      line-height: 27px;
    }

    .feature {
      flex-basis: 33%;
      margin-right: 55px;
    }
  }
}

.section-6 {
  background-color: #e5e5e5;
  background-image: url("../assets/landing/section6-background.png");
  background-position: center;
  background-size: cover;
  height: 890px;

  .section-content {
    justify-content: center;
  }

  .section-6-text {
    align-self: flex-end;
    width: 50%;

    h2 {
      margin-bottom: 21px;
    }

    p {
      font-size: 18px;
      line-height: 32px;
    }

    .quote {
      font-size: 16px;
      line-height: 27px;
      margin: 40px 16px 30px 30px;
    }

    .cite {
      font-size: 16px;
      margin-bottom: 10px;
      margin-left: 30px;
    }

    .ae-logo {
      margin-left: 30px;
    }
  }
}

.section-7 {
  background: #000;
  padding-top: 100px;

  .section-content {
    position: relative;
  }

  .section-content:after {
    background: linear-gradient(175.04deg, rgba(0, 0, 0, 0.0001) 58.76%, #000 93.37%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
}

footer {
  background: #f2f2f2;
  height: 223px;

  .footer-row-1 {
    align-items: center;
    border-bottom: 1px solid #9797971a;
    display: flex;
    justify-content: space-between;
    padding: 40px 0 30px;
  }

  .footer-slogan {
    font-size: 16px;
    line-height: 27px;
  }

  .footer-row-2 {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 30px;
  }

  .footer-copyright {
    font-size: 14px;
    line-height: 16px;
    opacity: 0.6;
  }

  .footer-links {
    align-items: center;
    display: flex;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      font-size: 14px;
      line-height: 16px;
      margin: 0 10px 0 0;
      padding: 0;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}

.footer-form {
  form {
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    height: 48px;
    line-height: 19px;
    margin-bottom: 0;
    overflow: hidden;
    width: 550px;
  }

  label {
    flex-grow: 1;
    flex-shrink: 0;
  }

  input {
    background: #fff;
    border: 0;
    color: #000;
    font-size: 16px;
    height: 100%;
    line-height: 19px;
    outline: 0;
    padding: 10px 20px 14px;
    width: 100%;
  }

  button {
    background: #1161fe;
    border: 1px solid #0043b3;
    color: #fff;
    flex-grow: 0;
    font-size: 16px;
    height: 100%;
    line-height: 19px;
    outline: 0;
    padding: 10px 20px 14px;
    text-shadow: 0 0 0 #fff;
  }
}

@media screen and (max-width: 1680px) {
  header,
  footer,
  main > * {
    overflow: hidden;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
</style>
