import React from "react";
import {Link} from 'react-router-dom' 
import './Product.css'
import Chart from './../../Components/Chart/Chart';
import { productsData } from "../../datas";
import PublishIcon from '@mui/icons-material/Publish';
export default function Product(){
    return(
        <div className="product">
          <div className="productTitlecontainer">
              <h1 className="produtTitle">product</h1>
               <Link to='/NewProduct'>
              <button className="productaddbutton">create</button>

              </Link>
          </div>
          <div className="productTop">
              <div className="productTopleft">

                  <Chart title="sale In Month" data={productsData}  dataKey="sales"  />
              </div>
              <div className="productTopRghit">
                  <div className="productInfoTOP">
                      <img src="image/3.jpg"  className="productinfoimg"/>
                      <span className="productName">Dell loptop</span>
                  </div>
                  <div className="productInfoBottom">
                      <div className="productInfoItem">
                          <div className="productInfokey"> ID:</div>
                          <div className="productInfoValue">123</div>
                      </div>

                      <div className="productInfoItem">
                          <div className="productInfokey">Name:</div>
                          <div className="productInfoValue"> dell loptop</div>
                      </div>

                      <div className="productInfoItem">
                          <div className="productInfokey">Sales:</div>
                          <div className="productInfoValue">$900000</div>
                      </div>

                      <div className="productInfoItem">
                          <div className="productInfokey">active</div>
                          <div className="productInfoValue">yes</div>
                      </div>

                      <div className="productInfoItem">
                          <div className="productInfokey">in stock:</div>
                          <div className="productInfoValue">no</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="productBotom">
              <div className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder="dell loptop" className="input"></input>

                      <label>In stock</label>
                      <select id="in stock"> 
                      <option value="YES">yes</option>
                      <option value="NO">no</option>
                      </select>

                      <label>Active</label>
                      <select id="in stock"> 
                      <option value="YES">yes</option>
                      <option value="NO">no</option>
                      </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productUploader">
                          <img src="/image/3.jpg" className="productLoaderimg"/>
                          <label>
                            <PublishIcon/>
                          </label>
                          <input type="file" style={{display:"none"}}/>
                      </div>
                      <button className="productFormRightButton"> Upload (edite)</button>
                  </div>
              </div>
          </div>
        </div>
    )
}