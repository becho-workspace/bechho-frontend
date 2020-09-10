import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogWeb extends Component {
  render() {
    return (
      <div className="">
        <div className="th-blogs-wraper">
          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/ecommerce">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599721765049-d7f0e0f727a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1887&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">Ecommerce in India</label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/recommerce">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599703285040-dc2e37260fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Recommerce in India
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-top">
              <Link to="/blogs/earnfromhome">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599709845872-81560dab036b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption
                    className="th-blogs-img-caption"
                    style={{ borderBottomLeftRadius: "12px" }}
                  >
                    <label className="th-blogs-title">Earn from Home</label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-mid">
              <Link to="/blogs/lockdownandincome">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599713201276-6733c471d85a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">
                      Lockdown and Income
                    </label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-mid">
              <Link to="/">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599685590866-546f48ed3e0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">Blog 1</label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="th-blogweb-img-card-bottom">
              <Link to="/">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599711730114-62556479181f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">Blog 2</label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-bottom">
              <Link to="/">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599683418126-ff992c715d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption className="th-blogs-img-caption">
                    <label className="th-blogs-title">Blog 3</label>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="th-blogweb-img-card-bottom">
              <Link to="/">
                <figure className="th-blogs-effect-img-card">
                  <img
                    src="https://images.unsplash.com/photo-1599667757306-e1aa3ab08ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80"
                    className="th-blog-img"
                    alt=""
                  />
                  <figcaption
                    className="th-blogs-img-caption"
                    style={{ borderBottomRightRadius: "12px " }}
                  >
                    <label className="th-blogs-title">Blog 4</label>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogWeb;
