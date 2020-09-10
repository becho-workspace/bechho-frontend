import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogMob extends Component {
  render() {
    return (
      <div className="">
        <div className="th-blogs-wraper">
          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/ecommerce">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599721765049-d7f0e0f727a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1887&q=80"
                    className="th-blog-img"
                  />
                  <p className="th-blogs-title">Ecommerce in India</p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="/blogs/recommerce">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599703285040-dc2e37260fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Recommerce in India</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/earnfromhome">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599709845872-81560dab036b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Earn from Home</p>
                </div>
              </Link>
            </div>
            <div className="th-blogmob-img-card">
              <Link to="/">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599667757306-e1aa3ab08ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Blog 1</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/blogs/lockdownandincome">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599713201276-6733c471d85a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Lockdown and Income</p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="/">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599685590866-546f48ed3e0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Blog 2</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogmob-img-card">
              <Link to="/">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599711730114-62556479181f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    className="th-blog-img"
                    alt=""
                  />

                  <p className="th-blogs-title">Blog 3</p>
                </div>
              </Link>
            </div>

            <div className="th-blogmob-img-card">
              <Link to="/">
                <div className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599683418126-ff992c715d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <p className="th-blogs-title">Blog 4</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogMob;
