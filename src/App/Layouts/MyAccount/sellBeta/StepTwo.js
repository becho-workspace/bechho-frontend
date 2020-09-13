import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionValue: [],
      price: null,
      faults: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  toggleChange = (e) => {
    const { questionValue } = this.state;
    this.setState({
      questionValue: [
        ...questionValue,
        { index: Math.random(), question: e.target.id, answer: e.target.value },
      ],
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { questionValue, price, faults } = this.state;
    const {
      currentStep,
      category,
      sub_category,
      product_name,
      description,
      city,
    } = this.props;

    // let form_data = new FormData();
    // form_data.append("mcq", questionValue);
    // form_data.append("price", price);
    // form_data.append("faults", faults);
    // // console.log(form_data);
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    console.log(
      this.props.currentStep,
      this.props.category,
      this.props.sub_category,
      this.props.product_name,
      this.props.description,
      this.props.description,
      this.props.city
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Product Description</div>
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
                    required
                    id="Does your device switch on"
                    value="on"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label "
                    for="inlineRadio1"
                  >
                    On
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-1"
                    required
                    id="Does your device switch on"
                    value="off"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
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
                    required
                    id="Display and touch screen status"
                    value="Flawless"
                    onClick={this.toggleChange}
                  />
                  <label
                    class=" mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Flawless
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-2"
                    required
                    id="Display and touch screen status"
                    value="Moinor scratches"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    Moinor scratches
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-2"
                    required
                    id="Display and touch screen status"
                    value="Shaded / white dots"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Shaded / white dots
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-2"
                    required
                    id="Display and touch screen status"
                    value="Broken dead or does not work properly"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
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
                    required
                    id=" Device Body (Back Panel / Cover) status"
                    value="	Flawless"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Flawless
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-3"
                    required
                    id=" Device Body (Back Panel / Cover) status"
                    value="Scratched"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    Scratched
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-3"
                    required
                    id="Does your device switch on"
                    value="Cracked"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    Cracked
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-3"
                    required
                    id="Does your device switch on"
                    value="Broken"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
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
                    required
                    id="Main Camera (Camera Glass) status"
                    value="Flawless"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Flawless
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-4"
                    required
                    id="Main Camera (Camera Glass) status"
                    value="Scratched"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    Scratched
                  </label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-4"
                    required
                    id="Main Camera (Camera Glass) status"
                    value="Blur"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Blur
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-4"
                    required
                    id="Main Camera (Camera Glass) status"
                    value="Cracked"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    Cracked Broken
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-4"
                    required
                    id="Main Camera (Camera Glass) status"
                    value="Broken"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
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
                    required
                    id="Age of the phone "
                    value="0-3 months"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio1"
                  >
                    0-3 months
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-5"
                    required
                    id="Age of the phone "
                    value="3-6 months"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    3-6 months
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-5"
                    required
                    id="Age of the phone (in months)"
                    value="6-9 months"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    6-9 months
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-5"
                    required
                    id="Age of the phone (in months)"
                    value="9-12 months or more"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
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
                    required
                    id=" Device has undergone repairs"
                    value="Yes"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label"
                    for="inlineRadio1"
                  >
                    Yes
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inline-radio-6"
                    required
                    id=" Device has undergone repairs"
                    value="No"
                    onClick={this.toggleChange}
                  />
                  <label
                    class="mb-0 th-sell-form-input-label mr-1"
                    for="inlineRadio2"
                  >
                    No
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
                name="faults"
                value={this.state.faults}
              />
            </Form.Group>
          </div>
        </div>

        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Upload Product Images</div>
          <div className="d-flex align-items-center mt-lg-4">
            <div className="th-sell-form-image-box mr-4"></div>
            <div className="th-sell-from-img-upload-btn">
              <span className="th-sell-from-img-upload-circle"> + </span>
              <Form.File lang="en" custom required />
            </div>
          </div>
        </div>

        <div className="th-sell-form-item-wraper">
          <div className="th-sell-form-item-header">Asked Price</div>
          <div className="mt-lg-3 mt-2">
            <Form.Group className="d-flex">
              <span className="th-sell-form-input-label mr-4">Enter Price</span>
              <Form.Control
                type="text"
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
    );
  }
}

export default StepTwo;
