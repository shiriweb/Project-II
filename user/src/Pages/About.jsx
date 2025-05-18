import React from "react";
import Crochet from "../Assets/images/toys/crochets.jpg";

const About = () => {
  return (
    <div className="bg-green-50">
      {/* About Us Title */}
      <div className="text-xl text-center py-6">
        <h1 className="text-3xl font-bold text-green-800">About Us</h1>
      </div>

      {/* Image and Paragraph Section */}
      <div className="flex flex-col lg:flex-row p-6 max-w-screen-xl mx-auto">
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            className="w-[400px] h-auto rounded-xl shadow-md"
            src={Crochet}
            alt="Crochet"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 px-4 text-green-900 text-center leading-relaxed space-y-4">
          <div className="flex flex-col text-base">
            <p className="mb-4">
              Welcome to <span className="font-semibold">Yarn Creation</span>,
              where artistry meets quality in the world of handmade yarn
              products. Our journey began with a dedication to the craft of
              crochet and an ambition to share these unique creations with
              crochet lovers.
            </p>
            <p className="mb-4">
              At Yarn Creation, we believe in the uniqueness of handmade
              products and the joy they bring. Each item is crafted not just as
              a product but as a cherished piece of art. Thank you for
              supporting Yarn Creation, where every creation is made with love
              and care just for you.
            </p>

            <h3 className="text-lg font-bold mb-2">Our Mission</h3>
            <p>
              Our mission is to provide products that reflect the beauty of
              handcrafted work. Every piece is thoughtfully made to bring joy
              and a sense of individuality to our customers. Handmade items
              carry a special value, making them ideal for personal enjoyment or
              as meaningful gifts.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-green-800">Why Choose Us?</h1>
      </div>

      {/* 3 Cards Section */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-6 lg:px-20 text-[13px] pb-10">
        {/* Card 1 */}
        <div className="border bg-green-600 text-white rounded-lg shadow-md flex-1 p-4 text-center">
          <h3 className="font-bold mb-2">Uncompromising Quality</h3>
          <p>
            Our products are crafted from the highest quality materials,
            selected for their durability, softness, and visual appeal. Each
            item is designed to meet rigorous quality standards, ensuring
            longevity and satisfaction with every use.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border bg-white text-green-900 rounded-lg shadow-md flex-1 p-4 text-center">
          <h3 className="font-bold mb-2">Trusted Reliability</h3>
          <p>
            From the materials we use to our customer service approach, Yarn
            Creation is committed to delivering a reliable, consistent
            experience, ensuring that every item meets or exceeds expectations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border bg-green-600 text-white rounded-lg shadow-md flex-1 p-4 text-center">
          <h3 className="font-bold mb-2">Custom Design</h3>
          <p>
            Whether you’re looking for a specific color, size, or design, we’re
            here to make your ideas a reality. Share your preferences with us,
            and we’ll work together to create something special that fits your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
