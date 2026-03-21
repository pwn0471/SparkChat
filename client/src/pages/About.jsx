import Logo from "../components/logo";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 p-6 md:p-10">
      
      {/* 🔥 HEADER */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          About BindaasTalk
        </h1>
        <p className="opacity-70 mt-2 max-w-xl mx-auto">
          Connect, chat, and build real conversations with people around the world.
        </p>
      </div>

      {/* 🚀 FEATURES */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-2">💬 Real-Time Chat</h2>
          <p className="opacity-70">
            Instantly message your friends with smooth real-time chat experience.
          </p>
        </div>

        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-2">📹 Video Calling</h2>
          <p className="opacity-70">
            Start video calls anytime and stay connected face-to-face.
          </p>
        </div>

        <div className="card bg-base-200 p-6">
          <h2 className="text-xl font-semibold mb-2">👥 Social Connections</h2>
          <p className="opacity-70">
            Discover new people, make friends, and grow your network.
          </p>
        </div>
      </div>

      {/* 🌍 MISSION */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="opacity-70">
          At BindaasTalk, we aim to make communication simple, fun, and accessible.
          Whether it's chatting or video calling, we help people stay connected anytime, anywhere.
        </p>
      </div>

      {/* 🛠 TECH STACK */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Built With</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="badge badge-outline">React</span>
          <span className="badge badge-outline">Node.js</span>
          <span className="badge badge-outline">Express</span>
          <span className="badge badge-outline">MongoDB</span>
          <span className="badge badge-outline">Stream</span>
          <span className="badge badge-outline">Tailwind CSS</span>
        </div>
      </div>

      {/* 🚀 CTA */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-3">
          Ready to start chatting?
        </h2>
        
      </div>
    </div>
  );
};

export default About;