"use client";

import React from "react";
import DesignCard from "./DesignCard";
import { useState } from "react";
import { useEffect } from "react";

export default function DesignList() {
    const [sortBy, setSortBy] = useState("name");
    const [designList, setDesignList] = useState([]);
    const designListUtil = [...designList];

    if (sortBy === "name") {
        designListUtil.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "size") {
        designListUtil.sort((a, b) => a.size.localeCompare(b.size));
    }

    const loadDesigns = async () => {
        try {

            const res = await fetch('/pages/api/designs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET', // Specify the allowed methods
                },
            });
    
            if (!res.ok) {
                throw new Error(`Failed to fetch designs: ${res.status} ${res.statusText}`);
            }
    
            const designs = await res.json();
            setDesignList(designs);
            console.log(designs);
        } catch (error) {
            console.error('Error loading designs:', error.message);
        }
    }

    useEffect(() => {
        loadDesigns();
    }, []);

    return(
        <div>
            <div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="size">Size</option>
                </select>
            </div>
            <div className="design-list grid grid-cols-4 gap-4 pt-2">
                {designListUtil.map((design) => (
                    <div key={design.id}>
                        <DesignCard 
                            name={design.name}
                            size={design.size}
                            image={design.image_url}
                            price={design.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}