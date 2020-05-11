import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import * as NProgress from 'nprogress/nprogress'
import '../customize/carousel.less';

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <div>
                <Component 
                  Component 
                  {...pageProps} 
                 />
            </div>
        )
      }
}