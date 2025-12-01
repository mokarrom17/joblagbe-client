import React from "react";
import { motion } from "framer-motion";
import finance from "../../assets/category/finance.jpg";
import software from "../../assets/category/software.jpg";
import hr from "../../assets/category/human.jpg";
import management from "../../assets/category/management.jpg";  
import retail from "../../assets/category/retail.jpg";
import security from "../../assets/category/security.jpg";
import content from "../../assets/category/content.jpg";
import market from "../../assets/category/research.jpg";
import marketing from "../../assets/category/marketing.jpg";
import customer from "../../assets/category/customer.jpg";
import { Link } from "react-router";
const Category = () => {
  return (
    <div>
      {/* Header */}
      <div className="my-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Browse by Category</h2>
        <p>Find the job that’s perfect for you. About 800+ new jobs everyday</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-12 mb-20">
        <motion.div whileHover={{ scale: 1.03 }}>
          {/* Finance */}
          <div className="card flex flex-row gap-2 w-full bg-base-100 card-xs shadow-sm mb-4 p-4">
            <div>
              <img className="w-12 h-12" src={finance} alt="Finance" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Finance</h2></Link>
              <p>165 Jobs Available</p>
            </div>
          </div>
          {/* Software */}
          <div className="card flex flex-row w-full bg-base-100 card-sm shadow-sm p-4">
             <div className="pt-4">
              <img className="w-12 h-12" src={software} alt="Software" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Software</h2></Link>
              <p>1856 Jobs Available</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          {/* Human Resources */}
          <div className="card w-full bg-base-100 card-xs shadow-sm mb-4 p-4">
             <div>
              <img className="w-12 h-12" src={hr} alt="Human Resources" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Human Resources</h2></Link>
              <p>165 Jobs Available</p>
            </div>
          </div>

          {/* Management */}
          <div className="card flex flex-row w-full bg-base-100 card-sm shadow-sm p-4">
             <div className="pt-4">
              <img className="w-12 h-12" src={management} alt="Management" />
            </div>
            <div className="card-body">
             <Link> <h2 className="card-title hover:text-[#3C65F5]">Management</h2></Link>
              <p>965 Jobs Available</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          {/* Retail & Products */}
          <div className="card w-full bg-base-100 card-xs shadow-sm mb-4 p-4">
             <div>
              <img className="w-12 h-12" src={retail} alt="Retail & Products" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Retail & Products</h2></Link>
              <p>563 Jobs Available</p>
            </div>
          </div>

          {/* Security Analyst */}
          <div className="card w-full bg-base-100 card-sm shadow-sm p-4">
             <div>
              <img className="w-12 h-12" src={security} alt="Security Analyst" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Security Analyst</h2></Link>
              <p>254 Jobs Available</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          {/* Content Writer */}
          <div className="card flex flex-row w-full bg-base-100 card-xs shadow-sm mb-4 p-4">
             <div>
              <img className="w-12 h-12" src={content} alt="Content Writer" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Content Writer</h2></Link>
              <p>142 Jobs Available</p>
            </div>
          </div>

          {/* Market Research */}
          <div className="card w-full bg-base-100 card-sm shadow-sm p-4">
             <div>
              <img className="w-12 h-12" src={market} alt="Market Research" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Market Research</h2></Link>
              <p>532 Jobs Available</p>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          {/* Marketing & Sales */}
          <div className="card w-full bg-base-100 card-xs shadow-sm mb-4 p-4">
             <div>
              <img className="w-12 h-12" src={marketing} alt="Marketing & Sales" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Marketing & Sales</h2></Link>
              <p>1526 Jobs Available</p>
            </div>
          </div>

          {/* Customer Service */}
          <div className="card flex flex-row w-full bg-base-100 card-sm shadow-sm p-2">
             <div className="pt-4">
              <img className="w-12 h-12" src={customer} alt="Customer Help" />
            </div>
            <div className="card-body">
              <Link><h2 className="card-title hover:text-[#3C65F5]">Customer Help</h2></Link>    
              <p>185 Jobs Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
