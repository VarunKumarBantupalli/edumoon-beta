import whatsapplogo from '../../assets/images/socialmedialogos/whatsapplogo.png';
import instagramlogo from '../../assets/images/socialmedialogos/instagramlogo.png';
import discordlogo from '../../assets/images/socialmedialogos/discordlogo.png';
import linkedinlogo from '../../assets/images/socialmedialogos/linkedinlogo.png';
import youtubelogo from '../../assets/images/socialmedialogos/youtubelogo.png';




const socialMediaPlatforms = [
    {
      name: "WhatsApp",
      color: "bg-green-500",
      logo: whatsapplogo, 
      description: "Join us on WhatsApp for instant updates.",
      link: "https://chat.whatsapp.com/DndX5CJ8Yov4F3pj5VzxzX",
      button : "join Now"
    },
    {
      name: "Discord",
      color: "bg-indigo-500",
      logo: discordlogo, 
      description: "Join our Discord community.",
      link: "https://discord.com/invite/2kA86Q8CnU",
      button : "join Now"
    },
    {
      name: "Instagram",
      color: "bg-pink-600",
      logo: instagramlogo, 
      description: "Follow us on Instagram.",
      link: "https://instagram.com",
      button : "Follow Now"
    },
    {
      name: "LinkedIn",
      color: "bg-blue-700",
      logo: linkedinlogo, 
      description: "Connect with us on LinkedIn.",
      link: "https://www.linkedin.com/company/edumoon/posts/?feedView=all",
      button : "Connect Now"
    },
    {
      name: "YouTube",
      color: "bg-red-500",
      logo: youtubelogo, 
      description: "Subscribe to our YouTube channel.",
      link: "https://www.youtube.com/@EduMoon",
      button : "Subscribe "
    },
  ];
  
  export default socialMediaPlatforms;
  