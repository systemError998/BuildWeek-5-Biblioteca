import { Carousel } from "@material-tailwind/react";
 

/* Mettere immagini 2000x800 sennò se vedono na merda me raccomando */
export default function FakeCarousel() {
  return (
    <Carousel className="rounded-sm h-96 "> 
      <img
        src="https://www.missiondiscovery.org/wp-content/uploads/2023/12/website-featured-image-9.28-49.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://wefoundadventure.com/wp-content/uploads/2016/07/P7270396-2000x800.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://assets-au-scc.kc-usercontent.com/330b87ea-148b-3ecf-9857-698f2086fe8d/ea08766e-a930-44c5-8cfc-2a12e5da5514/services_print_2000.jpg?w=2000&fm=webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}



