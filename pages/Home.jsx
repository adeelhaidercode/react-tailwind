import React from 'react'
import AdmissionBanner from '../components/AdmissionBanner'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import WhoWeAre from '../components/WhoWeAre'

function Home() {
    return (
        <div>
            <Layout>
                <AdmissionBanner />
                <WhoWeAre />
                <Footer />
            </Layout>
        </div>
    )
}

export default Home
