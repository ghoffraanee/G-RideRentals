'use client';
import React, { useState, useEffect } from 'react';
import mysql from 'mysql2/promise';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  // Add other fields based on your 'car' table columns
}

const Page: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create the connection to the database
        const connection = await mysql.createConnection({
          host: '127.0.0.1',
          user: 'root',
          database: 'grentdb',
        });

        // Execute the SELECT query
        const [results, fields] = await connection.query<Car[]>('SELECT * FROM car');

        // Set the fetched data to the state
        setCars(results);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cars from MySQL Database</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year})
            {/* Add other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
