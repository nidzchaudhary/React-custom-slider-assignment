import React from 'react';
import Link from 'next/link'
import Head from "next/head";
import Router from "next/router";
import Layout from '../components/layout';
export default class extends React.PureComponent<any, any> {
    static async getInitialProps(context) {
      const query = context.query;
      return { query };
    }
    render() {
        return (
        <Layout title="Swiflearn" metaDescription="Test">
        <div className="column12container main_container">
        <div className="column12">
            <div className="slider-section">
            <h1 className="section-heading">Concept video</h1>
            <span className="section-heading-caption">Select a number</span>
            <div className="carousel">
                <div className="slides">
                    <div className="slider-inner">
                            <img src="images/slide-1.jpg" />
                            <span className="slider-caption">
                                See what <a href="/">Leena Barua</a> thinks
                                about our plans
                            </span>
                        
                    </div>

                    <div className="slider-inner">
                       
                            <img src="images/slide-2.jpg" />
                     
                    </div>

                    <div className="slider-inner">
                        
                            <img src="images/slide-3.jpg" />
                      
                    </div>

                    <div className="slider-inner">
                       
                            <img src="images/slide-4.jpg" />
                        
                    </div>

                    <div className="slider-inner">
                      
                            <img src="images/slide-5.jpg" />
                      
                    </div>

                    <div className="slider-inner">
                        
                            <img src="images/slide-6.jpg" />
                        
                    </div>

                    <div className="slider-inner">
                        <img src="images/slide-7.jpg" />
                    </div>

                </div>

            </div>
        </div>
        </div>
    </div>
        </Layout>
        )
    }
}
    