"use server";
import { db } from "@/utils";

async function CreateCar(
  name: string,
  year: string,
  color: string,
  price: string,
  status: string,
  description: string
) {
  const car = await db.car.create({
    data: {
      name: name,
      year: year,
      color: color,
      price: price,
      status: status,
      description: description,
    },
  });
  return car;
}
async function getAllCars() {
  const cars = await db.car.findMany();
  return cars;
}
async function getCar(id: number) {
  const car = await db.car.findUnique({
    where: {
      id: id,
    },
  });
  return car;
}
async function updateCar(
  id: number,
  name: string,
  year: string,
  color: string,
  price: string,
  status: string,
  description: string
) {
  const car = await db.car.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      year: year,
      color: color,
      price: price,
      status: status,
      description: description,
    },
  });
  return car;
}
async function deleteCar(id: number) {
  const car = await db.car.delete({
    where: {
      id: id,
    },
  });
  return car;
}
export { CreateCar, getAllCars, getCar, updateCar, deleteCar };
