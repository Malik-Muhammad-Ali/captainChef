import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";


const ServicesComp = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isMobile = useMediaQuery("(max-width:640px)"); 

  const features = [
    {
      icon: (<svg width="86" height="81" viewBox="0 0 86 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="57.3335" y="40.129" width="14.3333" height="23.3333" rx="4.25" stroke="#CE2729" stroke-width="1.41667" stroke-linejoin="round"/>
<rect x="14.3335" y="40.129" width="14.3333" height="23.3333" rx="4.25" stroke="#CE2729" stroke-width="1.41667" stroke-linejoin="round"/>
<path d="M14.3335 43.4618V53.4618" stroke="#CE2729" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71.6665 43.4618V53.4618" stroke="#CE2729" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71.6668 43.4622C71.6668 35.5057 68.6466 27.875 63.2706 22.249C57.8945 16.6229 50.603 13.4622 43.0002 13.4622C35.3973 13.4622 28.1058 16.6229 22.7298 22.249C17.3537 27.875 14.3335 35.5057 14.3335 43.4622" stroke="#CE2729" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60.9165 63.4625C59.5728 65.6847 55.5415 70.1292 50.1665 70.1292" stroke="#CE2729" stroke-width="1.41667"/>
<path d="M53.0417 71.7953C53.0417 74.1181 51.0014 76.087 48.375 76.087C45.7486 76.087 43.7083 74.1181 43.7083 71.7953C43.7083 69.4724 45.7486 67.5036 48.375 67.5036C51.0014 67.5036 53.0417 69.4724 53.0417 71.7953Z" stroke="#CE2729" stroke-width="1.41667"/>
</svg>
), // Replace with actual icons
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: (<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.1822 15.4827C74.0105 16.466 73.8747 17.4574 73.6587 18.4308C73.2105 20.4463 72.417 22.3294 71.28 24.0521C70.0448 25.9236 68.8211 27.8067 67.4812 29.603C65.8436 31.7985 63.5712 32.9355 60.8522 33.1629C59.617 33.266 58.3786 33.3281 57.1418 33.4149C55.3144 33.5425 53.9074 34.4128 52.772 35.8279C47.4436 42.4701 42.0988 49.0991 36.7606 55.7331C32.5544 60.9584 28.3483 66.1838 24.1454 71.4124C23.2915 72.4742 22.2379 73.176 20.8636 73.3461C20.7377 73.3625 20.6182 73.4247 20.4955 73.4656C20.3221 73.4656 20.1471 73.4656 19.9737 73.4656C18.8825 73.2725 17.8174 73.0402 16.8849 72.3629C14.498 70.6304 13.7618 66.8022 16.1634 64.3433C26.7418 53.5114 37.2596 42.6239 47.833 31.7887C49.415 30.1674 50.0645 28.3416 49.8534 26.1085C49.7176 24.6819 49.5671 23.2472 49.7242 21.8026C49.9712 19.5187 50.8955 17.5523 52.5953 16.0292C54.8137 14.0414 56.9291 11.9146 59.4747 10.3277C62.7679 8.27457 66.372 7.3895 70.2379 7.62835C72.116 7.74451 73.6555 9.27743 73.9368 11.1932C74.0121 11.7069 73.9908 12.2369 74.1822 12.7326C74.1822 13.6504 74.1822 14.5666 74.1822 15.4827ZM72.1487 13.6537C72.1487 12.9519 72.0604 12.2598 71.9622 11.5678C71.797 10.4079 70.9773 9.63735 69.8027 9.59808C66.4309 9.48847 63.2767 10.2639 60.435 12.1012C57.8992 13.7388 55.7266 15.8345 53.5655 17.9171C52.3025 19.1343 51.6972 20.7523 51.7004 22.5273C51.7021 23.877 51.7675 25.23 51.8657 26.578C52.0538 29.1645 51.1409 31.2717 49.3446 33.1138C38.7598 43.9719 28.2223 54.8791 17.6113 65.7126C16.0129 67.3453 16.6133 70.3997 18.8841 71.1637C20.2076 71.6087 21.5426 71.4795 22.8285 69.8746C32.3058 58.0382 41.8289 46.2378 51.3324 34.421C52.6624 32.767 54.3393 31.7183 56.4514 31.468C57.7029 31.3191 58.9675 31.2521 60.2272 31.1997C62.8236 31.0901 64.8538 29.9793 66.3213 27.8345C67.2931 26.4144 68.2567 24.9879 69.2219 23.5645C71.2489 20.5723 72.2485 17.2742 72.1487 13.6537Z" fill="#CE2729"/>
        <path d="M68.0426 73.4623C67.7612 73.248 67.4128 73.3511 67.1003 73.2676C66.0991 73.0042 65.2778 72.4709 64.5874 71.7102C58.3445 64.8423 52.0999 57.976 45.8569 51.1065C45.6672 50.8971 45.4676 50.6893 45.3203 50.4521C45.0438 50.0038 45.1076 49.5539 45.4905 49.2087C45.8717 48.8635 46.3232 48.8521 46.7436 49.1613C46.9334 49.3004 47.0921 49.4885 47.2524 49.6652C53.497 56.5314 59.7596 63.383 65.9715 70.2803C67.3113 71.7674 69.2876 71.54 70.4426 70.6942C71.8479 69.6668 72.4173 67.1228 70.6897 65.5637C63.6549 59.2145 56.6757 52.8046 49.677 46.4161C49.4839 46.241 49.2811 46.0676 49.1289 45.8599C48.8197 45.4378 48.8393 44.9862 49.1845 44.6034C49.5314 44.219 49.9715 44.1568 50.4246 44.4349C50.5899 44.5363 50.7371 44.6705 50.8811 44.803C57.9469 51.2472 65.0111 57.693 72.0737 64.1404C73.798 65.7143 74.2021 67.6496 73.4414 69.7961C72.6986 71.895 71.1412 73.055 68.9359 73.3429C68.7657 73.3658 68.6005 73.4198 68.4336 73.459C68.3044 73.4623 68.1735 73.4623 68.0426 73.4623Z" fill="#CE2729"/>
        <path d="M18.6143 6.79726C19.0691 6.77927 19.5992 7.00504 20.0638 7.39767C24.5431 11.1735 29.0667 14.902 33.4822 18.7515C35.3603 20.3891 36.0932 22.6697 36.157 25.1449C36.1865 26.2999 36.1767 27.4566 36.1652 28.6132C36.1489 30.4946 36.854 32.0406 38.256 33.284C38.7943 33.76 39.3325 34.2394 39.8315 34.7547C40.2241 35.1621 40.2127 35.751 39.8528 36.111C39.4601 36.5036 38.9677 36.5854 38.557 36.2255C37.348 35.167 36.0507 34.1854 35.218 32.7605C34.4834 31.5056 34.1709 30.1494 34.166 28.6999C34.1611 27.3273 34.2233 25.9531 34.0957 24.5805C33.9125 22.6255 33.1108 21.0026 31.5926 19.7298C27.4208 16.2288 23.2638 12.713 19.1002 9.20217C19.0004 9.11874 18.9022 9.03203 18.7959 8.95514C18.6323 8.83571 18.4589 8.7261 18.274 8.9126C18.0597 9.12528 18.1906 9.31015 18.3411 9.48029C18.4572 9.60953 18.5849 9.72896 18.7076 9.8533C21.8945 13.0451 25.0814 16.2369 28.2683 19.4288C29.7849 20.9486 29.7767 22.3654 28.2503 23.895C26.9104 25.2365 25.5755 26.5829 24.2323 27.9196C22.8859 29.2594 21.4053 29.2562 20.0523 27.9048C16.8785 24.731 13.7112 21.5523 10.5407 18.3735C10.4016 18.2345 10.2642 18.0954 10.1235 17.958C9.93864 17.778 9.73905 17.5097 9.46911 17.7437C9.20408 17.9744 9.41349 18.2198 9.58199 18.4226C9.99917 18.9249 10.4229 19.4239 10.8433 19.9245C13.9534 23.63 17.0765 27.3241 20.1669 31.0459C21.6507 32.8324 23.5583 33.6161 25.8241 33.6766C27.3456 33.7175 28.872 33.5834 30.3902 33.7731C32.1161 33.9874 33.5853 34.7351 34.7943 35.9801C35.4012 36.605 35.9853 37.2529 36.5611 37.9073C37.0667 38.4815 37.0683 39.0508 36.5988 39.4647C36.1669 39.8459 35.5926 39.7789 35.0986 39.2652C34.6617 38.8087 34.2331 38.3425 33.8225 37.8631C32.5513 36.3825 30.9464 35.6905 28.9979 35.6807C27.3031 35.6709 25.5967 35.8345 23.9182 35.5007C21.9206 35.1032 20.1996 34.1936 18.8695 32.605C15.2589 28.2958 11.6384 23.9964 8.02944 19.6856C6.74028 18.1445 7.33087 16.0995 9.17954 15.6807C10.1235 15.4664 10.8695 15.8476 11.5256 16.5069C14.3542 19.3486 17.1894 22.1838 20.0213 25.0206C20.5301 25.5294 21.0307 26.0447 21.546 26.5453C22.0515 27.0361 22.5799 26.9494 22.953 26.3621C23.1476 26.0562 22.8712 25.9711 22.7419 25.8418C21.3791 24.4627 20.0065 23.0917 18.6372 21.7191C16.3894 19.468 14.1415 17.2169 11.8969 14.9625C11.7137 14.7776 11.5272 14.5879 11.3914 14.3686C11.1411 13.9645 11.218 13.5572 11.5305 13.2267C11.8642 12.8733 12.2863 12.7866 12.7166 13.0402C12.9374 13.1695 13.1256 13.3641 13.3088 13.5474C16.8982 17.1384 20.4826 20.7326 24.0703 24.3253C24.5366 24.7932 24.7035 24.767 25.0994 24.2189C25.2139 24.0603 25.2204 23.9588 25.0847 23.8312C24.9734 23.7265 24.8703 23.6153 24.7624 23.5073C21.2008 19.9474 17.6442 16.3858 14.0908 12.821C13.9076 12.6361 13.7129 12.4513 13.5771 12.2337C13.317 11.8149 13.3677 11.3928 13.7129 11.0394C14.0597 10.686 14.4834 10.6353 14.9022 10.8889C15.1395 11.0328 15.3391 11.2455 15.5386 11.4451C19.1133 15.0214 22.6814 18.6009 26.2609 22.1707C26.4147 22.3245 26.5456 22.7645 26.9104 22.3915C27.2213 22.0758 27.5795 21.7699 27.2343 21.2758C27.1116 21.0991 26.9415 20.9535 26.7877 20.7997C23.5419 17.5441 20.2977 14.2868 17.0454 11.0378C16.499 10.4913 16.1309 9.88602 16.1505 9.08275C16.1832 7.80994 17.1812 6.81199 18.6143 6.79726Z" fill="#CE2729"/>
        </svg>
        ),
      title: "200+ Dishes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: (<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.6675 10.1289L56.6675 23.4622" stroke="#CE2729" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M23.3325 10.1289L23.3325 23.4622" stroke="#CE2729" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M10 30.1289C10 25.4149 10 23.0578 11.4645 21.5934C12.9289 20.1289 15.286 20.1289 20 20.1289H60C64.714 20.1289 67.0711 20.1289 68.5355 21.5934C70 23.0578 70 25.4149 70 30.1289V30.1289H10V30.1289Z" stroke="#CE2729" stroke-width="2.5"/>
        <rect x="10" y="20.1289" width="60" height="50" rx="5" stroke="#CE2729" stroke-width="2.5"/>
        <path d="M42.5 51.3789L37.5 56.3789L42.5 61.3789" stroke="#CE2729" stroke-width="1.25"/>
        <path d="M32.4223 52.0039C31.4309 50.2869 31.0521 48.284 31.3479 46.3236C31.6437 44.3631 32.5965 42.5612 34.0503 41.213C35.5041 39.8649 37.3726 39.0504 39.3498 38.9031C41.327 38.7558 43.2956 39.2843 44.9331 40.4021C46.5707 41.5199 47.78 43.1607 48.3631 45.0557C48.9461 46.9507 48.8683 48.9875 48.1424 50.8325C47.4165 52.6775 46.0855 54.2213 44.3675 55.211C42.6495 56.2006 40.6463 56.5774 38.6861 56.2797" stroke="#CE2729" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        ),
      title: "Subscriptions in Budget",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: (<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.1822 15.3538C74.0105 16.3371 73.8747 17.3285 73.6587 18.3019C73.2105 20.3174 72.417 22.2005 71.28 23.9232C70.0448 25.7947 68.8211 27.6778 67.4812 29.4741C65.8436 31.6696 63.5712 32.8066 60.8522 33.034C59.617 33.1371 58.3786 33.1992 57.1418 33.2859C55.3144 33.4136 53.9074 34.2839 52.772 35.699C47.4436 42.3412 42.0988 48.9702 36.7606 55.6041C32.5544 60.8295 28.3483 66.0549 24.1454 71.2835C23.2915 72.3453 22.2379 73.0471 20.8636 73.2172C20.7377 73.2336 20.6182 73.2958 20.4955 73.3367C20.3221 73.3367 20.1471 73.3367 19.9737 73.3367C18.8825 73.1436 17.8174 72.9113 16.8849 72.234C14.498 70.5015 13.7618 66.6733 16.1634 64.2144C26.7418 53.3825 37.2596 42.4949 47.833 31.6598C49.415 30.0385 50.0645 28.2127 49.8534 25.9796C49.7176 24.553 49.5671 23.1183 49.7242 21.6737C49.9712 19.3898 50.8955 17.4234 52.5953 15.9003C54.8137 13.9125 56.9291 11.7857 59.4747 10.1988C62.7679 8.14566 66.372 7.26059 70.2379 7.49944C72.116 7.6156 73.6555 9.14852 73.9368 11.0643C74.0121 11.578 73.9908 12.108 74.1822 12.6037C74.1822 13.5215 74.1822 14.4377 74.1822 15.3538ZM72.1487 13.5248C72.1487 12.823 72.0604 12.1309 71.9622 11.4389C71.797 10.279 70.9773 9.50844 69.8027 9.46918C66.4309 9.35957 63.2767 10.135 60.435 11.9722C57.8992 13.6099 55.7266 15.7056 53.5655 17.7882C52.3025 19.0054 51.6972 20.6234 51.7004 22.3984C51.7021 23.7481 51.7675 25.1011 51.8657 26.4491C52.0538 29.0356 51.1409 31.1428 49.3446 32.9849C38.7598 43.843 28.2223 54.7502 17.6113 65.5837C16.0129 67.2164 16.6133 70.2708 18.8841 71.0348C20.2076 71.4798 21.5426 71.3506 22.8285 69.7457C32.3058 57.9093 41.8289 46.1088 51.3324 34.2921C52.6624 32.6381 54.3393 31.5894 56.4514 31.3391C57.7029 31.1902 58.9675 31.1232 60.2272 31.0708C62.8236 30.9612 64.8538 29.8504 66.3213 27.7056C67.2931 26.2855 68.2567 24.859 69.2219 23.4356C71.2489 20.4434 72.2485 17.1453 72.1487 13.5248Z" fill="#E25439"/>
        <path d="M68.0424 73.3334C67.761 73.1191 67.4125 73.2222 67.1 73.1387C66.0988 72.8753 65.2775 72.342 64.5872 71.5813C58.3442 64.7134 52.0996 57.8471 45.8567 50.9776C45.6669 50.7682 45.4673 50.5604 45.3201 50.3232C45.0436 49.8749 45.1074 49.425 45.4902 49.0798C45.8714 48.7346 46.3229 48.7232 46.7434 49.0324C46.9332 49.1714 47.0919 49.3596 47.2522 49.5363C53.4968 56.4025 59.7593 63.2541 65.9712 70.1514C67.3111 71.6385 69.2874 71.4111 70.4424 70.5653C71.8477 69.5379 72.417 66.9939 70.6894 65.4348C63.6546 59.0856 56.6755 52.6757 49.6767 46.2872C49.4837 46.1121 49.2808 45.9387 49.1287 45.731C48.8195 45.3089 48.8391 44.8573 49.1843 44.4745C49.5311 44.0901 49.9712 44.0279 50.4244 44.306C50.5896 44.4074 50.7369 44.5416 50.8808 44.6741C57.9467 51.1183 65.0109 57.5641 72.0735 64.0115C73.7978 65.5854 74.2019 67.5207 73.4411 69.6672C72.6984 71.7661 71.1409 72.926 68.9356 73.214C68.7655 73.2369 68.6002 73.2909 68.4334 73.3301C68.3041 73.3334 68.1733 73.3334 68.0424 73.3334Z" fill="#E25439"/>
        <path d="M18.6141 6.66848C19.0689 6.65048 19.599 6.87625 20.0636 7.26889C24.543 11.0448 29.0665 14.7732 33.482 18.6227C35.3601 20.2603 36.0931 22.5409 36.1569 25.0161C36.1863 26.1711 36.1765 27.3278 36.165 28.4844C36.1487 30.3658 36.8538 31.9118 38.2558 33.1552C38.7941 33.6313 39.3323 34.1106 39.8313 34.6259C40.2239 35.0333 40.2125 35.6223 39.8526 35.9822C39.4599 36.3748 38.9675 36.4566 38.5569 36.0967C37.3479 35.0382 36.0505 34.0566 35.2178 32.6317C34.4832 31.3769 34.1708 30.0206 34.1659 28.5711C34.161 27.1985 34.2231 25.8243 34.0955 24.4517C33.9123 22.4967 33.1106 20.8738 31.5924 19.601C27.4207 16.1 23.2636 12.5842 19.1 9.07339C19.0002 8.98995 18.9021 8.90325 18.7957 8.82635C18.6321 8.70693 18.4587 8.59732 18.2738 8.78382C18.0595 8.9965 18.1904 9.18136 18.3409 9.35151C18.4571 9.48075 18.5847 9.60018 18.7074 9.72451C21.8943 12.9163 25.0812 16.1082 28.2681 19.3C29.7847 20.8198 29.7765 22.2366 28.2501 23.7662C26.9102 25.1077 25.5753 26.4542 24.2321 27.7908C22.8857 29.1306 21.4051 29.1274 20.0522 27.776C16.8783 24.6022 13.7111 21.4235 10.5405 18.2448C10.4014 18.1057 10.264 17.9666 10.1233 17.8292C9.93846 17.6493 9.73887 17.381 9.46893 17.6149C9.2039 17.8456 9.4133 18.091 9.58181 18.2938C9.99899 18.7961 10.4227 19.2951 10.8432 19.7957C13.9532 23.5012 17.0763 27.1953 20.1667 30.9171C21.6505 32.7037 23.5581 33.4873 25.8239 33.5478C27.3454 33.5887 28.8718 33.4546 30.39 33.6443C32.116 33.8587 33.5851 34.6063 34.7941 35.8513C35.401 36.4762 35.9851 37.1241 36.561 37.7785C37.0665 38.3527 37.0681 38.9221 36.5986 39.336C36.1667 39.7172 35.5924 39.6501 35.0984 39.1364C34.6616 38.6799 34.2329 38.2137 33.8223 37.7343C32.5511 36.2538 30.9462 35.5617 28.9978 35.5519C27.3029 35.5421 25.5965 35.7057 23.918 35.372C21.9205 34.9744 20.1994 34.0648 18.8693 32.4762C15.2587 28.167 11.6383 23.8677 8.02926 19.5568C6.74009 18.0157 7.33069 15.9707 9.17936 15.5519C10.1233 15.3376 10.8693 15.7188 11.5254 16.3781C14.354 19.2198 17.1892 22.055 20.0211 24.8918C20.5299 25.4006 21.0305 25.9159 21.5458 26.4165C22.0513 26.9073 22.5798 26.8206 22.9528 26.2333C23.1475 25.9274 22.871 25.8423 22.7417 25.7131C21.3789 24.3339 20.0064 22.963 18.637 21.5904C16.3892 19.3392 14.1413 17.0881 11.8967 14.8337C11.7135 14.6488 11.527 14.4591 11.3912 14.2399C11.1409 13.8358 11.2178 13.4284 11.5303 13.0979C11.864 12.7446 12.2861 12.6578 12.7164 12.9114C12.9372 13.0407 13.1254 13.2354 13.3086 13.4186C16.898 17.0096 20.4824 20.6039 24.0702 24.1965C24.5364 24.6644 24.7033 24.6382 25.0992 24.0902C25.2137 23.9315 25.2203 23.83 25.0845 23.7024C24.9732 23.5977 24.8702 23.4865 24.7622 23.3785C21.2006 19.8186 17.644 16.257 14.0906 12.6922C13.9074 12.5073 13.7127 12.3225 13.5769 12.1049C13.3168 11.6861 13.3675 11.264 13.7127 10.9106C14.0595 10.5572 14.4832 10.5065 14.9021 10.7601C15.1393 10.9041 15.3389 11.1167 15.5385 11.3163C19.1131 14.8926 22.6812 18.4722 26.2607 22.0419C26.4145 22.1957 26.5454 22.6358 26.9102 22.2628C27.2211 21.947 27.5794 21.6411 27.2342 21.147C27.1115 20.9703 26.9413 20.8247 26.7875 20.6709C23.5417 17.4153 20.2976 14.1581 17.0452 10.909C16.4988 10.3626 16.1307 9.75723 16.1503 8.95396C16.183 7.68116 17.181 6.6832 18.6141 6.66848Z" fill="#E25439"/>
        </svg>
        ), // Replace with actual icons
      title: "Customise Plans",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: (<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.8126 22.0921C36.4346 15.5554 37.7456 12.2871 40 12.2871C42.2544 12.2871 43.5654 15.5554 46.1874 22.0921L46.3095 22.3965C47.7908 26.0894 48.5315 27.9358 50.041 29.0581C51.5505 30.1804 53.532 30.3579 57.4951 30.7128L58.2115 30.777C64.6976 31.3578 67.9406 31.6483 68.6345 33.7116C69.3285 35.7748 66.9201 37.966 62.1032 42.3483L60.4956 43.8109C58.0573 46.0293 56.8381 47.1384 56.2699 48.5922C56.1639 48.8634 56.0757 49.1412 56.0061 49.4239C55.6325 50.9395 55.9896 52.5486 56.7036 55.7668L56.9259 56.7685C58.2381 62.683 58.8942 65.6402 57.7486 66.9158C57.3205 67.3924 56.7642 67.7356 56.1461 67.9042C54.4921 68.3555 52.1439 66.4421 47.4473 62.6151C44.3634 60.1021 42.8215 58.8457 41.0511 58.563C40.3548 58.4518 39.6452 58.4518 38.9489 58.563C37.1785 58.8457 35.6366 60.1021 32.5526 62.6151C27.8561 66.4421 25.5079 68.3555 23.8539 67.9042C23.2358 67.7356 22.6795 67.3924 22.2514 66.9158C21.1058 65.6402 21.7619 62.683 23.0742 56.7685L23.2964 55.7668C24.0104 52.5486 24.3675 50.9395 23.9939 49.4239C23.9243 49.1412 23.8361 48.8634 23.7301 48.5922C23.1619 47.1384 21.9427 46.0293 19.5044 43.8109L17.8968 42.3483C13.0799 37.966 10.6715 35.7748 11.3655 33.7116C12.0594 31.6483 15.3024 31.3578 21.7885 30.777L22.5049 30.7128C26.468 30.3579 28.4495 30.1804 29.959 29.0581C31.4685 27.9358 32.2092 26.0894 33.6905 22.3965L33.8126 22.0921Z" stroke="#E25439"/>
        </svg>
        ),
      title: "Loyalty Programs ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: (<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="16.6665" width="13.3333" height="46.6667" rx="1" stroke="#E25439" stroke-width="2" stroke-linecap="round"/>
        <rect x="46.6667" y="16.6665" width="13.3333" height="46.6667" rx="1" stroke="#E25439" stroke-width="2" stroke-linecap="round"/>
        </svg>
        ),
      title: "Pause Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  if (isMobile) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2, 
          padding: 2,
          mr:2,
          ml:2,
        }}
      >
      <Box
      sx={{
        display: 'inline-block',
        padding: "4px",
        alignSelf: { xs: "center", sm: "center", md: "flex-start", lg: "flex-start" },
      }}
    >
      <Typography
        sx={{
          fontSize: {lg:"30px", md:"30px", sm:"24px",xs:"24px"},
          fontWeight: 600,
          borderBottom: "2px solid red",
          display: "inline-block",
        }}
      >
        Our Services
      </Typography>
    </Box>
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              boxShadow: "none",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              width: "100%",
            }}
          >
            <div style={{ fontSize: "40px", color: "red" }}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Box>
        ))}
      </Box>
    );
  }
  else{
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{lg:"50px",nd:"50px",sm:"30px",xs:"20px"},
        backgroundColor: "#f9f9f9",
        position:"relative"
      }}
    >
    <Box
      sx={{
        display: 'inline-block',
        padding: "4px",
        alignSelf: { xs: "center", sm: "center", md: "flex-start", lg: "flex-start" },
      }}
    >
      <Typography
        sx={{
          fontSize: {lg:"30px", md:"30px", sm:"24px",xs:"24px"},
          fontWeight: 600,
          borderBottom: "2px solid red",
          display: "inline-block",
        }}
      >
        Our Services
      </Typography>
    </Box>
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        style={{
          width: "100%",
          margin: "10px",
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "300px",
                height: "300px",
                padding: "20px",
                boxShadow: "none ",
                borderRadius: "10px",
                textAlign: "center",
                backgroundColor: "#fff",
                margin: "auto",
              }}
            >
              <div style={{ fontSize: "40px", color: "red" }}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Box>
          </SwiperSlide>
        ))}
        <IconButton
          ref={prevRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "1px",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            height: "60px",
            width: "35px",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ChevronLeftOutlinedIcon />
        </IconButton>
        <IconButton
          ref={nextRef}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            height: "60px",
            width: "35px",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ChevronRightOutlinedIcon />
        </IconButton>
      </Swiper>
    </Box>
  );
}
};

export default ServicesComp;