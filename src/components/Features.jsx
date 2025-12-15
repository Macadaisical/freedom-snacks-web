import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck } from 'lucide-react';

const features = [
    {
        icon: <Star size={48} />,
        title: "5-Star Crunch",
        desc: "Rated the best crunch by snack patriots everywhere."
    },
    {
        icon: <ShieldCheck size={48} />,
        title: "Quality Guaranteed",
        desc: "Made with the finest pride and pork."
    },
    {
        icon: <Truck size={48} />,
        title: "Bulk Supply",
        desc: "We supply commissaries nationwide. Fast & Reliable."
    }
];

const Features = () => {
    return (
        <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                border: '2px solid transparent',
                                borderRadius: '1rem'
                            }}
                            whileHover={{ borderColor: '#f0f0f0', backgroundColor: '#fafafa' }}
                        >
                            <div style={{ color: 'var(--freedom-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {f.icon}
                            </div>
                            <h3 style={{ color: 'var(--freedom-blue)', fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h3>
                            <p style={{ lineHeight: '1.6' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
