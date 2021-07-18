import React from 'react';

class AddressFinder extends React.Component {
  constructor(props) {
    super(props)
    
    this.widget = null
    this.address_line_1 = React.createRef()
    this.address_line_2 = React.createRef()
    this.suburb = React.createRef()
    this.city = React.createRef()
    this.postcode = React.createRef()
  }
  
  componentDidMount() {
    var script = document.createElement('script');
    script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    script.async = true;
    script.onload = this.loadWidget
    document.body.appendChild(script);
  }
  
  componentWillUnmount() {
    if (this.widget) {
      this.widget.destroy()
      this.widget = null
    }
  }
  
  loadWidget = () => {
    this.widget = new window.AddressFinder.Widget(
      document.getElementById('address_line_1'),
      'PL6QGU8NF3HVWKEYTJ9M',
      'NZ'
    );
    this.widget.on('result:select', (fullAddress, metaData) => {
      const selected = new window.AddressFinder.NZSelectedAddress(fullAddress, metaData);
      this.address_line_1.current.value = metaData.address_line_1;
      this.address_line_2.current.value = metaData.address_line_2 || '';
      this.suburb.current.value = metaData.selected_suburb;
      this.city.current.value = metaData.selected_city;
      this.postcode.current.value = metaData.postcode;
    });
  }

  render() {
    return (
      <form className='formBox mb-10' method="get">
        <div className='formTitle'>Enter Address:</div>

        <div className='formHeader'>Address Line 1</div>
        <input type="search" id='address_line_1' className='formInput rounded-md shadow-sm col-1 h-12' placeholder="Search address here..." ref={this.address_line_1}></input>

        <div className='formHeader'>Address Line 2</div>
        <input className='formInput rounded-md shadow-sm col-1 h-12' ref={this.address_line_2}></input>

        <div className='formHeader'>Suburb</div>
        <input className='formInput rounded-md shadow-sm col-1 h-12' ref={this.suburb}></input>

        <div className='formHeader'>City</div>
        <input className='formInput rounded-md shadow-sm col-1 h-12' ref={this.city}></input>

        <div className='formHeader'>Postcode</div>
        <input className='formInput rounded-md shadow-sm col-1 h-12' ref={this.postcode}></input>

        <input className='btn bg-black hover:bg-gray-900 text-white font-bold rounded-md items-center justify-center col-1 h-8 mt-4 w-20' type="submit" name="next"></input>
      </form>
    )
  }
}

export default AddressFinder;