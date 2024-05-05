import React, { useEffect, useState } from 'react'
import AppComps from '../appcomps'

const ZodiacSign = (userDescription) => {
    return (
        <section className='zodiac-element'>
            <h2 className='zodiac-heading'>{userDescription?.heading}</h2>
            <p className='zodiac-description'>{userDescription?.description}</p>
        </section>
    )
}

const Images = (props) => {
    return (
        <section className='image-container'>
            <img className='image' src={props.source} alt={props.altr} />
        </section>
    )
}
const Index = () => {
    return (
        <section className='main-page'>
            <h1 className='main-heading'>Welcome to Starsigns!</h1>
            <Images source={AppComps.zodiacWheel}
                altr='A picture of a wheel divided into 12 section which correlates to the 12 Zodiac signs' />

            <ZodiacSign description='Starsigns helps you find out more 
            about which starsign you are and what it means for you in terms 
            of our vast galaxy-The Milky Way.' />
            <ZodiacSign heading="What is the Zodiac?"
                description="The zodiac wheel encompasses 12 signs—beginning with Aries and ending in Pisces. 
                This modality is presented via a sphere (or 'zodiac wheel') that is divided into twelve 
                separate sections in the sky. Each section correlates with a zodiac sign—through which 
                the sun, moon, and planets pass during the year. The zodiacal belt is a heavenly body 
                that extends to 8 degrees north or south of the ecliptic."
            />
            <section className='zodiac-container'>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Aries: Mar 21 - Apr 19'
                        description="Aries is a cardinal, masculine fire sign. It's ruled by Mars 
                        and is associated with the First House of “the self.” As a cardinal sign, 
                        Aries begins the zodiacal modality and astrological year. It's the original 
                        leader!
                        "/>
                    <ZodiacSign description="Aries's masculine nature is forthright with vigor, 
                        a trait further amplified by its planetary ruler, Mars. Aries is known to 
                        be vivacious, enthusiastic, childish, and a bit selfish. Although this 
                        sign is impulsive and hotheaded, nobody can deny the quick-thinking 
                        and intense call-to-action innate in any Aries. Expressed as the Ram, 
                        Aries can be counted on to headbutt its way through anything!"/>
                </div>

                <div className='zodiac-elements'>
                    <ZodiacSign heading="Taurus: Apr 20 - May 20"
                        description="Taurus is a fixed, feminine earth sign ruled by Venus 
                        and associated with the Second House of money and value. As a fixed sign, 
                        Taurus is a natural stabilizer, graced with an earthy presence and stamina."/>
                    <ZodiacSign description="The subdued, yet elegantly feminine, nature of 
                        Taurus is sensualized by its planetary ruler, Venus. Taurus is always 
                        counted on for great taste and pleasurable pastimes. But the phrase, 
                        'stubborn as a bull', fits this zodiac sign beautifully, as it is 
                        represented by the Bull. However, nobody can deny Taurus' ability to 
                        weather any storm through thick and thin."
                    />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading="Gemini: May 21 - Jun 20"
                        description="Gemini is a mutable, masculine air sign, ruled by Mercury and associated 
                        with the Third House of local community, short-distance travel, siblings, 
                        and communication."/>
                    <ZodiacSign description="Fickle and flighty, Gemini's mutable nature is 
                        restless. Gemini's mutability is directly expressed thanks to its masculine 
                        nature. It often comes out as a witty remark, a flippant hand gesture, and 
                        an overbooked schedule. As it is ruled by Mercury, Gemini is typically 
                        concerned with learning as much as possible from its peers. Gemini's intelligent 
                        duality is expressed as the Twins, implying that Gemini's mercurial mind 
                        considers all perspectives."
                    />
                </div>

                <div className='zodiac-elements'>
                    <ZodiacSign heading='Cancer: Jun 21 - Jul 22'
                        description="Cancer is a cardinal, feminine water sign ruled by the moon and 
                        associated with the Fourth House of Home and Family in all generational forms."
                    />
                    <ZodiacSign description="Driven by gut-wrenching intuition, Cancer's cardinal 
                        capabilities come from its feminine energy. Cancer is the leader who can intuitively 
                        act and decide but will also dip and dodge responsibilities as well. Cancer's watery 
                        nature is often all in or all out. Ruled by the moon, Cancer's psychic receptivity 
                        is incredible. It is motherly, nurturing, and compassionate. It's also usually wrapped 
                        up in a moody presence. After all, Cancer isn't known as the Crab for nothing!"
                    />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Leo: Jul 23 - Aug 22'
                        description="Leo is a fixed, masculine fire sign, ruled by the sun and associated with 
                        the Fifth House of joy, pleasure, sex, children, and dating. As bright as the sun 
                        itself, Leo loves to shine!"
                    />
                    <ZodiacSign description="Leo's natural habitat is the center stage for attention. Bold and 
                        audacious, Leo's warmth remains unmoving—thanks to its fixed nature. While stubborn at 
                        times, Leo tends to remain enthusiastically engaged. Whether it's Leo's immense joy or 
                        dramatic flair, no other sign can match the King or Queen of zodiac. This Lion will always 
                        have the loudest roar!"
                    />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Virgo: Aug 23 - Sep 22'
                        description="Virgo is a mutable, feminine earth sign, ruled 
                        by Mercury and associated with the Sixth House of work, health, 
                        and daily routines." />
                    <ZodiacSign description="Much like clay, the earthy mutability of 
                    Virgo is consistently adaptable. Virgo is known to be dependable—thanks 
                    to Virgo's attention to detail and perfectionist mindset. Although somewhat
                     nervous, thanks to the restless Mercurial influence, Virgo tends to strive 
                     for the best outcome at all times. So, Virgo's critical nature is ideal for 
                     catching—then perfecting—every flaw. After all, nothing gets by the Virgin. 
                     And when lightning strikes, the volcanic nature of Virgo becomes electric!" />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Libra: Sep 23 - Oct 22'
                        description="Libra is a cardinal, masculine air sign ruled by Venus and associated 
                    with the Seventh House of commitment, partnerships, and marriage."
                    />
                    <ZodiacSign description="Represented as the Scales, Libra's cardinal nature comes 
                    from its ability to weigh all pros and cons. Although expressed with masculine drive, 
                    Libra's air qualities tend to take over. Libra values partnerships above all else, so 
                    its leadership capabilities heavily depend on social relations. At times, Libra may 
                    come across as codependent or indecisive. If anything, Libra wants to ensure that 
                    every decision is reciprocal! Libra is all about keeping it 50/50, in true Scales 
                    fashion."
                    />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Scorpio: Oct 23 - Nov 21'
                        description="Scorpio is a fixed, feminine water sign that is co-ruled by both Mars and 
                    Pluto. It's associated with the Eighth House of joint resources, intimacy, and 
                    transformation."
                    />
                    <ZodiacSign description="Ruled by Mars and Pluto, Scorpio is an intense sign. Its fixed 
                    water persona implies a profound, unmoving emotional depth. No other sign can fearlessly 
                    explore the underworld like Scorpio. Scorpio's extraordinary fierceness is undeniable. 
                    Because of its intensity, Scorpio tends to go through multiple phases of transformation, 
                    beginning with the Scorpio and ending with the Phoenix. Look no further for redirection, 
                    as Scorpio can be the spark for cabalistic transformation!" />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Sagittarius: Nov 22 - Dec 21'
                        description="Sagittarius is a mutable, masculine fire sign, ruled by Jupiter and 
                        associated with the Ninth House of exploration, long-distance travel, philosophy, law, 
                        and spirituality."
                    />
                    <ZodiacSign description="The wildfire nature of Sagittarius is thanks to its mutable fieriness. 
                    Sagittarius tends to be an expressive, jolly sign with a booming presence. Larger than life, 
                    Sagittarius's planetary ruler, Jupiter, often gifts this sign with excessive tendencies and an 
                    abundance of luck. Much like the Centaur, Sagittarius brazenly explores unknown territory. At 
                    times, this sign can be a tad much, from opinions on politics to exorbitant vices. But 
                    Sagittarius tends to shine as the perfect travel buddy, debate partner, and mischief-maker!"
                    />
                </div><div className='zodiac-elements'>
                    <ZodiacSign
                        heading='Capricorn: Dec 22 - Jan 19'
                        description='Capricorn is a cardinal, feminine earth sign, ruled by 
                        Saturn and associated with the Tenth House of career, reputation, and goals. 
                        Capricorn focuses on building an empire, with its feminine cardinal abilities 
                        facilitated through earthy stoicism. Capricorn plays the long game 
                        to ensure incredible success.'
                    />

                    <ZodiacSign description="Ruled by Saturn, Capricorn is tasked with the 
                        karmic duties of time, lessons, and authority. No other sign can shoulder 
                        the weight of the world as Capricorn can. So, it' s no surprise that Capricorn 
                        is expressed as the Sea-Goat or Goat. Much like a goat clinging to the 
                        mountainside, Capricorn will tenaciously persevere."
                    />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Aquarius: Jan 20 - Feb 18'
                        description="Aquarius is a fixed, masculine air sign—ruled by Saturn and Uranus. 
                    It's associated with the Eleventh House of greater communities, friendships, and dreams. 
                    Aquarius is a paradox. Its fixed nature is unmoving, yet its air qualities prefer 
                    innovation." />
                    <ZodiacSign description="Aquarius is a technological sign, preferring both the structure 
                    of Saturn and the unconventionality of rebellious Uranus. To amplify Aquarius' quirkiness, 
                    it's represented as the Water-Bearer. Surprisingly, Aquarius is highly empathetic, but 
                    shielded by a cold front. Aquarius wants to better the collective but is also highly 
                    selective with personal relationships. No matter what, Aquarius tends to shine in its 
                    individualism." />
                </div>
                <div className='zodiac-elements'>
                    <ZodiacSign heading='Pisces: Feb 19 - Mar 20'
                        description="Pisces is a mutable, feminine water sign, co-ruled by Jupiter and Neptune. 
                    It's associated with the Twelfth House of the subconscious, hidden talents/weaknesses, 
                    and self-undoing. Pisces weaves in and out of conscious reality thanks to its mystical 
                    mutability." />
                    <ZodiacSign description="Graced with water attributes, Pisces has this eclectic magic, 
                    gifted with psychic receptivity and scarily accurate intuition. Jupiter tends to magnify 
                    these qualities, but Neptune also tends to delude them with a dreamy confusion. Represented 
                    by two Fish swimming in synchronicity, Pisces is the reminder to consider the known and 
                    unknown." />
                </div>
            </section>
        </section>
    )
}

export default Index;