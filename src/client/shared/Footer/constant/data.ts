import FacebookIcon from "@/src/client/components/Svg/facebook";
import InstagramIcon from "@/src/client/components/Svg/instagram";
import LinkedinIcon from "@/src/client/components/Svg/linkedin";
import TiktokIcon from "@/src/client/components/Svg/tiktok";
import TwitterIcon from "@/src/client/components/Svg/twitter-x";
import WhatsappIcon from "@/src/client/components/Svg/whatsapp";


export const FOOTER_DATA = [
    {
        title: 'USEFUL LINKS', links: [
            'ABOUT US', 'MAKEUP', 'SKIN CARE & BODY', 'COSMETIC', 'BLOGS'
        ]
    },
    {
        title: 'HELPS & FAQS', links: [
            'DELIVERY', 'PAYMENT', 'PURCHASE RETURNS', 'COSTOMER CARE',
        ]
    },
    {
        title: 'INFORMATION', links: [
            'SHIPPING', 'CONTACT US', 'SITE MAP'
        ]
    }
];

export const socialIcons = [
	FacebookIcon(),
	InstagramIcon(),
	LinkedinIcon(),
	TiktokIcon(),
	TwitterIcon(),
	WhatsappIcon(),
];
