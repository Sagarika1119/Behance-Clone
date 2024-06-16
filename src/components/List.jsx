import React, { useState } from "react";
import PropTypes from 'prop-types';
import { DataItems } from "../data";
import { AiFillFolderOpen } from "react-icons/ai";
import {HeartIcon} from '@heroicons/react/solid';
import {motion} from 'framer-motion';
import { MdOpacity } from "react-icons/md";


const List = ({selectedCategory, searchCategory }) => {
    const [likeditems, setLikedItems] = useState([]);
    const handleLike = (id) => {
        if(likeditems.includes(id)){
            setLikedItems(likeditems.filter(item => item !== id));
        }
        else{
            setLikedItems([...likeditems,id]);
        }
    }
    
    const filteredItems = searchCategory
     ? 
      DataItems.filter(item => item.searchCategory.toLowerCase().includes(searchCategory.toLowerCase()))
     : 
      DataItems;
    const sortedItem = [...filteredItems].sort((a, b) => {
        if(a.sortItem[selectedCategory] && b.sortItem[selectedCategory]){
            return (b.sortItem[selectedCategory] - a.sortItem[selectedCategory]);
        }else{
            return 0;
        }
    });

        return (
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sortedItem.map((item, index) => (
                           <div key={index} 
                           className="category-item bg-white rounded-md overflow-hidden shadow-md transition-transform duration-150 hover:shadow-dark transform hover:-translate-y-3"
                           initial={{opacity:0,y:50}}
                           animate={{opacity:1,y:0}}
                           transition={{duration:0.5,delay:index * 0.1}}>
                           <div className="relative">
                            
                            <img src={item.featureImg} alt={item.featureTxt} className="w-full h-48 object-cover"/>
                            <div className="save-file absolute top-2 left-2 flex items-center py-2 px-3 bg-black/50 rounded-full cursor-pointer">
                             <AiFillFolderOpen className="text-white text-sm pr-1"/>
                             <span className="text-white text-xs font-medium ">Save</span>
                            </div>
                            <div className="save-file absolute top-2 right-2 flex items-center py-2 px-3 bg-black/50 rounded-full cursor-pointer">
                             
                             <span className="text-white text-xs font-medium ">{item.sortItem["Curated"]}</span>
                             
                             <span className="text-white text-xs font-medium ">{item.sortItem["Recommended"]}</span>
                            </div>
                           
                            </div>
                            <div className="p-3 flex  justify-between items-center  flex-1">
                                <div className="cursor-pointer mb-2">
                                    <h4 className="font-medium text-sm leading-[15px]  hover:underline">{item.featureTxt}</h4>

                                </div>
                                <div className="flex space-x-5">
                                    <div className={`be-like flex items-center cursor-pointer ${likeditems.includes(item.id) ? 'text-red-500' : 'text-[#959595]'}`}
                                    onClick={()=> handleLike(item.id)}
                                    >
                                        <HeartIcon className="li-icon w-5 h-5"/>
                                        
                                        <span className="text-sm font-medium text-[#959595]">{item.sortItem["Most Appreciated"]}</span>
                                    </div>
                                    <div className="be-watch flex items-center">
                                        <div className="wa-icon text-[#959595]">{item.feWatchIcon}</div>
                                        <span className="text-sm font-medium text-[959595]">{item.sortItem["Most Viewed"]}</span>
                                    </div>
                                </div>
                            </div>
                           </div>
                           
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    List.propTypes = {
    selectedCategory: PropTypes.oneOf([
        "Sort By",
        "Recommended",
        "Curated",
        "Most Appreciated",
        "Most Viewed",
        "Most Discussed",
        "Most Recent"
    ]).isRequired,
    searchCategory: PropTypes.string.isRequired,
}
export default List;