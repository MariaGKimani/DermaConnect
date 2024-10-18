import React from "react";
import { Box,Image,Text,Heading,SimpleGrid,Button,Link} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SkincareTips = () => {
    const skinTypes = [
        {
            url: 'https://thumbs.dreamstime.com/b/woman-dry-skin-face-facial-problem-woman-dry-skin-face-facial-problem-aging-process-sensitive-skin-concept-158160298.jpg',
            tipsUrl: 'https://my.clevelandclinic.org/health/diseases/16940-dry-skin'
        },
        {
            url: 'https://img.freepik.com/free-vector/cartoon-oily-skin-illustration-with-woman_52683-57211.jpg',
            tipsUrl: 'https://prequelskin.com/blogs/skin-notes-skincare-blog/oily-skin-type?srsltid=AfmBOoqlaz6b_PRYR7Sdf41m4ETXMbcosHoWfV7Bl3DvH6dHr_jvYZZH'
        },
        {
            url: 'https://img.freepik.com/premium-vector/normal-skin-type_461756-841.jpg',
            tipsUrl: 'https://prequelskin.com/blogs/skin-notes-skincare-blog/normal-skin-type?srsltid=AfmBOooPdHUF7xFaI3CSp_zVe9adR2oxgdI0uqzTUT2CSKMjUuglwgZd'
        },
        {
            url: 'https://thumbs.dreamstime.com/b/female-sensitive-skin-type-avatar-vector-women-woman-skincare-flat-design-178857020.jpg',
            tipsUrl: 'https://www.houstonmethodist.org/blog/articles/2022/feb/sensitive-skin-symptoms-common-triggers-how-its-treated/'
        }  
    ]

    const skinConcerns = [
        {
            imageUrl: 'https://www.byrdie.com/thmb/xyYjnOMgDVJLep0QnqyploGXuq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EMw5nnLXUAEnuvJ-c925bf0b25d941608cc9e6b4607a4395.jpg',
            title: 'Acne',
            tipsUrl: 'https://my.clevelandclinic.org/health/diseases/12233-acne'
        },
        {
            imageUrl: 'https://images.ctfassets.net/6m9bd13t776q/5xOcVfVObDIppyGEKy6gm/7f3b0a3417f35c696d2a5ccad3869af0/melasma_pregnancy_mask-hero-shutterstock_1433702288.webp?w=1122',
            title: 'Melasma',
            tipsUrl: 'https://www.medicalnewstoday.com/articles/323715'
        },
        {
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/5d125f4f793dd20001e70dfa/1561496395186-1DP219WFB2SMQY7H01PR/a5e9641ec070062280c5d9b429532cdf.jpg',
            title: 'Vitiligo',
            tipsUrl: 'https://www.medicalnewstoday.com/articles/245081#what-is-vitiligo'
        },
        {
            imageUrl: 'https://images.ctfassets.net/4f3rgqwzdznj/xO4L3ZBMzlU2Gzg2QDRFt/bebb9ca9bc7f56d647e5885321eab6f7/hyperpigmentation_treatment_1487810634.jpg',
            title: 'Hyperpigmentation',
            tipsUrl: 'https://my.clevelandclinic.org/health/diseases/21885-hyperpigmentation'
        },
        {
            imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/sites/2/2021/04/woman-looking-at-her-eczema-732x549-thumbnail.jpg',
            title: 'Eczema',
            tipsUrl: 'https://my.clevelandclinic.org/health/diseases/9998-eczema'
        },
        {
            imageUrl: 'https://media.allure.com/photos/5e6c283323f15a0008d31656/master/pass/psoriasis-portraits-body-mind-river.jpg',
            title: 'Psoriasis',
            tipsUrl: 'https://my.clevelandclinic.org/health/diseases/6866-psoriasis'
        }
    ]

    return (
        <>
        <Box>
            {/* <Navbar /> */}
            <Box bgImage='https://images.ctfassets.net/7bobsix9kke6/fNXkOvVP3m1Y5PKmvnxt3/e7c9f70748d268a589188b32287667bf/pexels-th-fingerstudios-6096399.jpg?w=1600&h=650&fl=progressive&q=75&fm=jpg&fit=thumb' height='65vh' filter='contrast(55%)' bgSize='cover'>
                <Box color='white' textAlign='center' p='13rem'>
                    <Heading size='4xl'>Unlock Expert Skin Care Insights</Heading>
                    <Text fontSize='3rem'>Your Guide to Glowing,Healthy,Skin Starts Here</Text>
                </Box>
            </Box>

            <Box bgColor='#D1EEF4' p='5rem'>
                <Heading textAlign='center'>Types of Skin</Heading>
                <SimpleGrid columns={2} gap='6rem' >
                {skinTypes.map((type) => {
                    return <Box key={type.url} mt='5rem' ml='16.5rem' mb='2rem'>
                        <Image src={type.url} height='25vh' borderRadius='50px'/>
                        <Link href={type.tipsUrl}>
                        <Button bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' mt='1rem' width='13vw'>Learn more</Button>
                        </Link>
                    </Box>
                })}
                </SimpleGrid>
            </Box>

            <Box p='3rem'>
                <Heading textAlign='center'>Commmon Skin Concerns</Heading>
                <SimpleGrid columns={3} >
                    {skinConcerns.map((concern) => {
                        return <Box mt='4rem' ml='8.5rem' mb='2rem'>
                            <Image src={concern.imageUrl} height='300px' width='300px' borderRadius='10px'/>
                            <Heading mt='1rem' size='lg'>{concern.title}</Heading>
                            <Link href={concern.tipsUrl}>
                                <Button bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' mt='1rem' width='16vw'>Learn more</Button>
                            </Link>
                        </Box>
                })}
                </SimpleGrid>
            </Box>

            <Footer/>
        </Box>
        </>
    )
};
export default SkincareTips;