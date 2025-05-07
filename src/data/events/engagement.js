import engagementImage from '../../assets/image/Engagement Ceremonies.jpeg'
import pannertikka from "../../assets/image/PannerTika.png"
import drinks from '../../assets/image/starter-drinks.jpg'
import maincourseImage1 from '../../assets/image/main-course.jpg'
import sweetsImage from '../../assets/image/Sweets-for-Wedding.jpg'
import butterroti from "../../assets/image/butter roti.jpg"
import garlicNaan from "../../assets/image/Garlic-Naan.jpg"
import lachaParatha from "../../assets/image/lachha-paratha.jpg"
import rumaliRoti from "../../assets/image/rumali_roti.jpg"
import dal from "../../assets/image/dal.jpg"
import cheesecake from "../../assets/image/cheesecake.webp"

const engagement = {
    id: "engagement",
    title: "Engagement Menu",
    description:
        "Elegant starters, premium main courses, and delightful desserts.",
    image: [engagementImage],
    menu: {
        "starter-platter": {
            items: [
                { name: "Paneer Tikka", image: [pannertikka] },
                { name: "Spring Rolls", image: [pannertikka] }
            ]
        },
        "starter-drinks": {
            items: [
                { name: "Mocktails", image: [drinks] },
                { name: "Lemonade", image: [drinks] },
                { name: "Fruit Punch", image: [drinks] }
            ],
        },
        "main-course": {
            categories: {
                sabji: {
                    title: "Sabji (Vegetable Dishes)",
                    items: [
                        { name: "Shahi Paneer", image: [maincourseImage1] },
                        { name: "Malai Kofta", image: [maincourseImage1] },
                        { name: "Bhindi Masala", image: [maincourseImage1] },
                    ]
                },
                rice: {
                    title: "Rice Varieties",
                    items: [
                        { name: "Jeera Rice", image: [maincourseImage1] },
                        { name: "Veg Biryani", image: [maincourseImage1] },
                        { name: "Matar Pulao", image: [maincourseImage1] },
                        { name: "Fried Rice", image: [maincourseImage1] },
                    ]
                },
                roti: {
                    title: "Breads",
                    items: [
                        { name: "Lachha Naan", image: [lachaParatha] },
                        { name: "Butter Roti", image: [butterroti] },
                        { name: "Rumali Roti", image: [rumaliRoti] },
                        { name: "Garlic Naan", image: [garlicNaan] },
                    ]
                },
                dal: {
                    title: "Dal Varieties",
                    items: [
                        { name: "Dal Makhani", image: [dal] },
                        { name: "Dal Tadka", image: [dal] },
                        { name: "Rajma", image: [dal] },
                        { name: "Chole", image: [dal] },
                    ]
                }
            },
        },
        "dessert-bar": {
            items: [
                { name: "Gulab Jamun", image: [cheesecake] },
                { name: "Cheesecake", image: [cheesecake] },
                { name: "Brownie", image: [cheesecake] }
            ]
        },
        "sweets-dishes": {
            items: [
                { name: "Rasgulla", image: [sweetsImage] },
                { name: "Kaju Katli", image: [sweetsImage] },
                { name: "Motichoor Ladoo", image: [sweetsImage] },
                { name: "Rasmalai", image: [sweetsImage] }
            ],
        },
    },
};

export default engagement;
