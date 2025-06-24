

}

interface HeroSliderProps {
  images: HeroImage[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    // fade: true, // フェード効果を維持するか、スライド効果にするかはお好みで
    cssEase: "ease-in-out",
    pauseOnHover: false,
    touchMove: false,
    swipe: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((imgDiv) => {
        if (imgDiv) {
          const scrollY = window.scrollY;
          const parallaxSpeed = 0.4;
          const translateY = scrollY * parallaxSpeed;
          imgDiv.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full relative" ref={el => imageRefs.current[index] = el}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="image-filter"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}