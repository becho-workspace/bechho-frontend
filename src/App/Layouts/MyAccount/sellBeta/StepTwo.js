import React, { Component } from "react";
import Loader from "../../../Loader/spinner";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { API } from "../../../../backend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      ans5: "",
      ans6: "",
      ans7: "",
      ans8: "",
      ans9: "",
      ans10: "",
      ans11: "",
      photo: null,
      price: null,
      width: window.innerWidth,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFileChange = (e) => {
    // Update the state
    this.setState({ photo: e.target.files[0] });

    // for showing the image
    var input = e.target;
    var reader = new FileReader();
    reader.onload = () => {
      var dataURL = reader.result;
      var output = document.getElementById("output");
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    let formData = new FormData();

    formData.append("category", this.props.category);
    formData.append("subCategoryName", this.props.sub_category);
    formData.append("name", this.props.product_name);
    formData.append("description", this.props.description);
    formData.append("address", this.props.address);
    formData.append("city", this.props.city);
    formData.append("ans1", this.state.ans1);
    formData.append("ans2", this.state.ans2);
    formData.append("ans3", this.state.ans3);
    formData.append("ans4", this.state.ans4);
    formData.append("ans5", this.state.ans5);
    formData.append("ans6", this.state.ans6);
    formData.append("ans7", this.state.ans7);
    formData.append("ans8", this.state.ans8);
    formData.append("ans9", this.state.ans9);
    formData.append("ans10", this.state.ans10);
    formData.append("ans11", this.state.ans11);
    formData.append("photo", this.state.photo);
    formData.append("price", this.state.price);

    if (formData) {
      axios
        .post(`${API}/product/create/${this.props.user._id}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        .then((response) => {
          if (response.status === 200) {
            toast("Successfully Submitted", { type: "success" });
          }
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({ loading: false });
          toast("Please include all fields", { type: "warning" });
        });
    }
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    // console.log(this.props.user._id);

    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">
                Product Description
              </div>
              {/* mcq starts */}
              <div className="th-sell-form-qna-list">
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Does your device switch on?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="inline-radio-1"
                        id="ans1"
                        value="on"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label ">On</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-1"
                        id="ans1"
                        value="off"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Off
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 2 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Display and touch screen status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Flawless"
                        onClick={this.toggleChange}
                      />
                      <label class=" mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Moinor scratches"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Moinor scratches
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Shaded / white dots"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Shaded / white dots
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-2"
                        id="ans2"
                        value="Broken dead or does not work properly"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken dead or does not work properly
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 3 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Device Body (Back Panel / Cover) status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="	Flawless"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Scratched"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Scratched
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Cracked"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Cracked
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-3"
                        id="ans3"
                        value="Broken"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 4 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Main Camera (Camera Glass) status?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Flawless"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Flawless
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Scratched"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Scratched
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Blur"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Blur</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Cracked"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Cracked Broken
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-4"
                        id="ans4"
                        value="Broken"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Broken
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 5 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Age of the phone ?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-5"
                        id="ans5"
                        value="0-3 months"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        0-3 months
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-5"
                        id="ans5"
                        value="3-6 months"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        3-6 months
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-5"
                        id="ans5"
                        value="6-9 months"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        6-9 months
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-5"
                        id="ans5"
                        value="9-12 months or more"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        9-12 months or more
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 6 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Device has undergone repairs?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-6"
                        id="ans6"
                        value="Yes"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-6"
                        id="ans6"
                        value="No"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 7 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Does your device have any functional issues?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-7"
                        id="ans7"
                        value="Yes"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-7"
                        id="ans7"
                        value="No"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 8 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Select the available accessories
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-8"
                        id="ans8"
                        value=" Earphones"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Earphones.
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-8"
                        id="ans8"
                        value="Box with same imei"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Box with same imei.
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-8"
                        id="ans8"
                        value="Original charger"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Original charger.
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 9 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) OEN/ Brand Warranty utilized
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="0 to 3 month"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        0 to 3 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="3 to 10 month"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        3 to 10 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="more than 10 month"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        more than 10 month
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-9"
                        id="ans9"
                        value="Not available"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Not available
                      </label>
                    </div>
                  </div>
                </div>
                {/* question 10 */}
                <div className="mt-lg-3 mb-lg-3">
                  <div className="mb-lg-2 th-sell-form-qna-ques">
                    Q) Silver Frame / Bezel (Around Screen)?
                  </div>
                  <div className="ml-4">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Discolored"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Discolored
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Dented"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Dented
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Broken"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label">
                        Broken
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inline-radio-10"
                        id="ans10"
                        value="Okay"
                        onClick={this.toggleChange}
                      />
                      <label class="mb-0 th-sell-form-input-label mr-1">
                        Okay
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mcq ends */}

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">Faults</div>
              <ul className="th-sell-form-item-list">
                <li>Front Camera Faulty.</li>
                <li>Back Camera Faulty.</li>
                <li>Speaker Faulty.</li>
                <li> Mic Faulty.</li>
                <li>Cellular Faulty.</li>
                <li>WiFi Faulty.</li>
                <li> Bluetooth Faulty.</li>
                <li>Fingerprint Sensor Faulty.</li>
                <li> Charging Faulty.</li>
                <li>Battery Faulty.</li>
                <li>Buttons Faulty.</li>
              </ul>
              <div className="mt-lg-3">
                <Form.Group className="d-flex">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Choose your answer(s) and type here"
                    className="th-sell-form-textarea"
                    onChange={this.handleChange}
                    name="ans11"
                    value={this.state.ans11}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">
                Upload Product Images
              </div>
              <div className="d-flex align-items-center mt-lg-4">
                <div className="th-sell-form-image-box mr-4">
                  <img
                    id="output"
                    alt=""
                    style={{
                      width: this.state.width < 780 ? "160px" : "200px",
                    }}
                  />
                </div>
                <div className="th-sell-from-img-upload-btn">
                  <span className="th-sell-from-img-upload-circle">+</span>
                  <input
                    type="file"
                    onChange={this.onFileChange}
                    required
                    style={{ width: "60px" }}
                    accept="image*/"
                  />
                </div>
              </div>
            </div>

            <div className="th-sell-form-item-wraper">
              <div className="th-sell-form-item-header">Asked Price</div>
              <div className="mt-lg-3 mt-2">
                <Form.Group className="d-flex">
                  <span className="th-sell-form-input-label mr-4">
                    Enter Price
                  </span>
                  <Form.Control
                    type="number"
                    placeholder="₹"
                    className="th-sell-form-input-price"
                    onChange={this.handleChange}
                    name="price"
                    value={this.state.price}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <button
                type="submit"
                className="th-sell-form-post"
                onClick={this.handleSubmit}
              >
                Post
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

StepTwo.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default withRouter(connect(mapStateToProps)(StepTwo));
