"use client";
import React from 'react';
import Layout from "../../components/Layout";
import DesignList from "../../components/DesignList";

export default function Design() {

    return(
        <Layout>
            <div className="flex flex-col">
                <div className="mb-10">
                    <h1 className="text-black text-6xl font-black italic">DESIGNS</h1>
                </div>

                <div className="flex flex-row text-black">
                    <DesignList />
                </div>
            </div>
        </Layout>
    )
}