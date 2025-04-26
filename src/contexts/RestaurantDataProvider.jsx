import React, { createContext, useState } from "react";

export const RestaurantDataContext = createContext();

function RestaurantDataProvider({ children }) {
  const [restaurantData, setRestaurantData] = useState([
    {
      name: "Classic Spot",
      type: "Italian",
      street: "61 Main Road, Manchester LS1 1UR",
      city: "Lu Wei Chen",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "Mexican",
      street: "42 King Street, Liverpool LS1 1UR",
      city: "Lu Wei Chen",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Classic Spot",
      type: "Italian",
      street: "61 Main Road, Manchester LS1 1UR",
      city: "Lu Wei Chen",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "Mexican",
      street: "42 King Street, Liverpool LS1 1UR",
      city: "Lu Wei Chen",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Delight",
      type: "Greek",
      street: "278 High Street, Sheffield CF10 1EP",
      city: "Kenji Tanaka",
      ratings: "⭐⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Royal Flavors",
      type: "Japanese",
      street: "87 Queen Street, Cardiff NE1 1AD",
      city: "Émile Durand",
      ratings: "⭐⭐⭐⭐",
      active: false, // used in pagination logic
    },
    {
      name: "Big Palace",
      type: "French",
      street: "336 London Road, Newcastle CF10 1EP",
      city: "Ho Shung Jong",
      ratings: "⭐⭐⭐",
      active: false, // used in pagination logic
    },
  ]);

  return (
    <>
      <RestaurantDataContext.Provider
        value={{ restaurantData, setRestaurantData }}
      >
        {children}
      </RestaurantDataContext.Provider>
    </>
  );
}

export default RestaurantDataProvider;
