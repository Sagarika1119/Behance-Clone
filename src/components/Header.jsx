import React, { useState } from "react";
import { IoClose, IoSearchSharp } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import Autosuggest from 'react-autosuggest';
import {  searchType,  boxItems} from "../data";
import { BsList } from "react-icons/bs";
import PropTypes from 'prop-types';
import nature from '../assets/images/nature.jpg';


const searchSuggestions = [
    'Photography',
    'Graphic Design',
    'Illustration',
    'Web Development',
    'UI/UX Design',
];
const categories = [
    'Recommended',
    'Curated',
    'Most Appreciated',
    'Most Viewed',
    'Most Discussed',
    'Most Recent'
];
const Header= ({selectedCategory,setSelectedCategory, setSearchCategory})=>{
    const [value,setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    // const [searchCategory, setSearchCategory] = useState("");
    const [selectedSuggestion,setSelectedSuggestion] = useState("");
    // const [selectedCategory, setSelectedCategory] = useState("");
    
    const onChange= (event, {newValue}) => {
        setValue(newValue);
    };
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
   };
   
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : searchSuggestions.filter(
      suggestion => suggestion.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = suggestion => suggestion;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // const handleSearchCategoryChange = (event, {newValue}) => {
  //   setSearchCategory(newValue);
  // }
  const handleSearch = () =>{
    setSearchCategory(selectedSuggestion);
  }

    const inputProps = {
        placeholder: 'Search the creative world at work',
        value,
        onChange: onChange,
        className: 'bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]'
    };
    const theme = {
        input: 'bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]',
        suggestionsContainer: 'absolute z-10 w-full bg-white shadow-lg mt-1',
        suggestion: 'p-2 hover:bg-gray-200 cursor-pointer',
        suggestionHighlighted: 'bg-gray-200'
      };
    return (
        <>
        
        <header 
        id="header" className="header sticky top-0 left-0 w-full bg-white  z-50 shadow-md"
        >
        <div 
        id='menu' className='menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5'
        >
       
        </div>
        <div className="border-b sticky top-0 bg-white z-10 ">
          <div className="container-fluid">
            <div className="top-header py-4 lg:py-3 px-5 border-b border">
                <div className="navbar flex items-center justify-between">
                    <div className="brand-logo flex items-center">
            
                        <img src={nature} alt="behance-logo" className="w-auto h-[45px]"/> 
                        <div className='page-links lg:ml-8 hidden lg:block'>
                        <ul className="flex items-center ">
                            <li className="mx-3 font-medium text-lg active "><a href="#">For you </a></li>
                            <li className="mx-3 font-medium text-lg active"><a href="#">Discover </a></li>
                            <li className="mx-3 font-medium text-lg active"><a href="#">Livestreams </a></li>
                            <li className="mx-3 font-medium text-lg active"><a href="#">Hire </a></li>
                            <li className="mx-3 font-medium text-lg active"><a href="#">Jobs </a></li>
                       </ul>
                   </div>
                </div>
       
            <div className="hidden lg:block">
            <div className="action-area flex items-center">
            <div className="login-btn rounded-full border px-4 py-1  border-black ">
              <a href="#" className=" font-medium text-md text-black-300">Login</a>  
           </div>
            <div className="login-btn mx-4 rounded-full border px-4 py-1   border-black text-black bg-blue-600">
              <a href="#" className="text-black font-medium text-md ">Sign Up</a>  
            </div>     
            <span className='text-gray-300'></span>  
            <div className='free-btn mx-4 flex items-center border rounded-full px-4 py-1 '>
                <div className='cloud-icon pr-2'>
                    <img src={nature} alt='Adobe Cloud' className='w-5 h-5'/>
                </div>
                <a href='#'>Free Trial</a>
            </div>
            <div className='adobe-btn mx-4 flex items-center hover:opacity-70'>
                <img src={nature} alt='Adobe Logo' className='w-5 h-5'/>
                <a href='#' className='pl-1 font-bold text-black text-sm'>Adobe</a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
        <div className="search-area p-5 relative overflow-visible ">
            <div className="search-box w-full border-2 border-gray-300 rounded-full bg-white overflow-visible flex items-center justify-between relative">
            <div className="input-box relative lg:w-full flex items-center">
                <Autosuggest
                  suggestions = {suggestions}
                  onSuggestionsFetchRequested = {onSuggestionsFetchRequested}
                  onSuggestionsClearRequested = {onSuggestionsClearRequested}
                  getSuggestionValue = {getSuggestionValue}
                  renderSuggestion = {renderSuggestion}
                  inputProps = {inputProps}
                  theme = {theme}
                  onSuggestionSelected = {(event, {suggestionValue})  => setSelectedSuggestion(suggestionValue)}
                  />
              <div className="search-icon text-2xl text-gray-300 absolute top-[2px] left-4">
              
                <IoSearchSharp />
              </div>  
              
            </div> 
            <button className="search-btn  px-4 py-1 lg:bg-black h-10 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleSearch}>Search</button>
            <div className="tags-search bg-white px-4 py-3 border-1-2">
                <ul className="flex items-center">
                    <li className="text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm">
                      <a href="#">Projects</a></li>
                    <div className="dt-arrow block lg:hidden">
                        <MdArrowDropDown/>
                    </div>
                    {searchType.map((tags) => (
                        <li className ="mx-1 font-medium text-lg py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]" key={tags.items}>
                          <a href="#">{tags.items}</a></li>
                    ))}
                </ul>
            </div>
          </div>
      </div>
      <div className='behance-tools flex items-center justify-between pb-5 px-5 cursor-pointer'>
        <div className='tools flex items-center'>
            {boxItems.map((tools) => (
                <div className='tools-item flex items-center  border-2 border-gray-400  rounded-md px-3 py-2  mx-2' key={tools.tags}>
                    <div className='t-icon'>
                        {tools.tagsIcon}
                    </div>
                    <div className='tname px-2'>
                        <p className='text-sm font-bold'>{tools.tags}</p>
                        </div>
                        <div className='dt-arrow'>
                            <MdArrowDropDown/>
                        </div>
                     </div>
            ))}
        </div>
        <div className="category-sort hidden lg:block">
        <div className='relative'>
          <label htmlFor="sortCategory"
          className="absolute top-0 left-3 text-sm text-gray-900 px-1"
           >
            {" "}
            Sort By
           </label>
            <select id="sortCategory"
            className="rounded-full bg-[#f1f1f1] text-[#222] p-4 pl-10 pr-6  font-medium text-md cursor-pointer"
            // id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            >
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <div className="absolute right-3 top-1/2 transform-y-1/2 pointer-events-none">
            </div>
        </div>
     </div>
     
    </div>
  </div>
  </div>
  
 
 </header>
 </>
    );
};
Header.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setSearchCategory: PropTypes.func.isRequired,
}
export default Header;