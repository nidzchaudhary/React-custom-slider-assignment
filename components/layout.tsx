import React, { Component } from 'react';
import Head from 'next/head';
import { Header } from './header'; 
import Footer from './footer'; 
import Router from "next/router";

export interface MyLayoutProps {
    title: String;
    metaDescription: any
}
export interface MyLayoutState {
  togglemenu: Boolean;
}

export default class Layout extends Component<MyLayoutProps, MyLayoutState> {
    state = {
      togglemenu: true
    }
  
    render() {
      const { children, title, metaDescription } = this.props;
      return (
        <div className="head">
        <Head>
            { title && <title>{title}</title>}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            { metaDescription && <meta name="description" content={metaDescription}/> }
            
            <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
            <script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
            <script type="text/javascript" src="js/jquery.carousel-1.1.min.js"></script>
            <script type="text/javascript" src="js/slider.js"></script>
            </Head>
            <Header data={""} />
              {children}
              <Footer />
        </div>
      );
    }
  }