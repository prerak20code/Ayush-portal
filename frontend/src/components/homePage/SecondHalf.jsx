import AYUSHLOGO from '../../assets/images/ayushLogo.png';
import ASHOKACHAKAR from '../../assets/images/ashokaChakar.png';
import ASHOKAPILLAR from '../../assets/images/ashokaPillar.png';
import { motion } from 'framer-motion';

export default function SecondHalf({ variants }) {
    // variants
    const { iconVariants, textVariants } = variants;

    // logos array
    const logos = [
        { image: AYUSHLOGO, className: '' },
        { image: ASHOKACHAKAR, className: 'slow-spin' },
        { image: ASHOKAPILLAR, className: '' },
    ];
    const logoElements = logos.map((logo, index) => (
        <motion.div
            key={index}
            className={`rounded-full overflow-hidden drop-shadow-md p-2 size-[180px] ${logo.className}`}
            custom={index}
            variants={iconVariants}
        >
            <img
                src={logo.image}
                alt="ayush and india logos"
                className="object-cover size-full"
            />
        </motion.div>
    ));

    // HTML
    return (
        <div className="px-12 md:px-36 text-justify">
            {/* logo section */}
            <motion.div
                className="flex items-center justify-evenly mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {logoElements}
            </motion.div>

            {/* text section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={textVariants}
            >
                <h2 className="text-3xl font-bold mb-4">
                    Innovating Wellness: The Future of AYUSH Startups
                </h2>
                <p className="text-lg leading-8">
                    The AYUSH sector is a treasure trove of ancient wisdom and
                    natural wellness practices, now finding a fresh perspective
                    through innovative startups. By blending the time-tested
                    principles of Ayurveda, Yoga, Naturopathy, Unani, Siddha,
                    and Homeopathy with modern technologies, AYUSH startups are
                    creating transformative solutions for global health and
                    wellness challenges.These ventures are not just preserving
                    India’s rich heritage but also reimagining it to meet
                    contemporary needs. From advanced herbal formulations to
                    digital health platforms and sustainable wellness products,
                    AYUSH startups are driving a new wave of growth and
                    recognition for traditional healthcare systems. Join the
                    movement and be a part of this exciting journey toward a
                    healthier, more balanced world.
                </p>
            </motion.div>
        </div>
    );
}
