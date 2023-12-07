"use client";

import React from "react";
import DesignCard from "./DesignCard";
import { useState } from "react";
export default function DesignList({ designs }) {
    const [sortBy, setSortBy] = useState("name");
    const designList = [...designs];

    if (sortBy === "name") {
        designList.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "size") {
        designList.sort((a, b) => a.size.localeCompare(b.size));
    }

    return(
        <div>
            <div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="size">Size</option>
                </select>
            </div>
            <div>
                <div className="design-list grid grid-cols-4 gap-4">
                    {designList.map((design) => (
                        <div key={design.id}>
                            <DesignCard 
                                name={design.name}
                                size={design.size}
                                image={design.image}
                                price={design.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}