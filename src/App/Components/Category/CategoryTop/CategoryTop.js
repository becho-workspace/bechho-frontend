import React, { Component } from "react";
import CategoryCard from "../Cards/CategoryCard";
import axios from "axios";
import { API } from "../../../../backend";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class CategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      data: [],
    };
  }

  componentDidMount() {
    this.fetch_products();
  }

  fetch_products = () => {
    axios
      .get(`${API}/products/${this.props.city}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        // console.log(err);
        toast(err.data.response.error, { type: "warning" });
      });
  };

  render() {
    // console.log(this.props.city);
    return (
      <div>
        <div className="th-category-title">Mobile and Laptops</div>
        <div className="mt-lg-3">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between">
              {this.state.data &&
                this.state.data.map((item, index) => {
                  return (
                    <CategoryCard
                      src={item.photo.path}
                      title={
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
                      }
                      description={item.description}
                      location={
                        item.city.charAt(0).toUpperCase() + item.city.slice(1)
                      }
                      price={item.price}
                      id={item._id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.location.city,
});

export default connect(mapStateToProps)(CategoryTop);
