import React, { Component } from "react";
import CategoryCard from "../Cards/CategoryCard";
import Loader from "../../../Loader/spinner";
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
      loading: false,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.fetchProducts();
    }
  }

  fetchProducts = () => {
    axios
      .get(`${API}/products/${this.props.city}`)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        toast(err.response.data.error, { type: "warning" });
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <div className="th-category-title">Mobile and Laptops</div>
            <div className="mt-3">
              <div
                class="d-flex flex-wrap"
                style={{
                  justifyContent:
                    this.state.width < 768 ? "center" : "space-between",
                }}
              >
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.location.city,
});

export default connect(mapStateToProps)(CategoryTop);
