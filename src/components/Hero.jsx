import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '600px', // Reduced from 100vh to fit better in embeds
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Top-align instead of center
            flexDirection: 'column',
            background: 'radial-gradient(circle at center, #ffffff 0%, #f0f0f0 100%)',
            paddingTop: '120px', // Fixed space from top (80px nav + 40px gap)
            paddingBottom: '4rem',
            overflow: 'hidden',
            position: 'relative'
        }}>

            {/* Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'conic-gradient(from 0deg, transparent 0deg, rgba(13, 71, 161, 0.03) 90deg, transparent 180deg)',
                        zIndex: 0
                    }}
                />
            </div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        color: 'var(--freedom-blue)',
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        letterSpacing: '5px'
                    }}>
                        AMERICA's FAVORITE
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        lineHeight: '0.9',
                        color: 'var(--freedom-red)',
                        marginBottom: '2rem',
                        textShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                    }}
                >
                    JAIL BIRD<br />
                    SNACKS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: '1.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        color: 'var(--freedom-slate)'
                    }}
                >
                    Set your taste buds free with the crunchiest pork skins in the land.
                </motion.p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <motion.a
                        href="/shop"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'var(--freedom-red)',
                            color: 'white',
                            padding: '1.5rem 3rem',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            border: '4px solid var(--freedom-red)',
                            boxShadow: '0 10px 20px rgba(183, 28, 28, 0.3)'
                        }}
                    >
                        ORDER SNACKS
                    </motion.a>

                    <motion.a
                        href="/wholesale"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(13, 71, 161, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'var(--freedom-blue)',
                            padding: '1.5rem 3rem',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            border: '4px solid var(--freedom-blue)'
                        }}
                    >
                        WHOLESALE
                    </motion.a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
