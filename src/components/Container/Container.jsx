const Container = ({ children }) => {
  return (
    <div class="relative">
      <img
        class="absolute left-0 top-0 -z-20 h-[100vh] w-full object-cover"
        src="https://tailkits.com/ui/iframe/assets/img/bg-5.png"
        alt="Background image"
      />
      {children}
    </div>
  );
};

export default Container;
