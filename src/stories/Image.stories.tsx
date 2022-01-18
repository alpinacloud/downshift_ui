import Image from '../components/Image/Image';

export const basic = () => {
  return (
    <>
      <div style={{width: 320, marginBottom: 24}}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
          width={320}
          height={200}
        />
      </div>

      <div style={{width: 320, height: 320, marginBottom: 24}}>
        <Image
          src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1"
        />
      </div>

      <div style={{width: 320, height: 640, marginBottom: 24}}>
        <Image
          src="https://images.unsplash.com/photo-1464278533981-50106e6176b1"
        />
      </div>
    </>
  );
};

export default {
  component: Image,
};