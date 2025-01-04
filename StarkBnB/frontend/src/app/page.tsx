"use client";
import Image from "next/image";
import faucet from "../../public/assets/faucetBanner.svg";
import deployer from "../../public/assets/deployerBanner.svg";
import wikipedia from "../../public/assets/wikipediaBanner.svg";
import addressBook from "../../public/assets/addressBook.svg";
import converter from "../../public/assets/converterBanner.svg";
import burnerWallet from "../../public/assets/burnerWallet.svg";
import Link from "next/link";
import Upright from "public/svg/Upright";
import NetworkSwitcher from "./components/lib/NetworkSwitcher";
import Header from "./components/internal/Header";
import AddTokenButton from "./components/lib/AddToken";
import { HeroSection } from "./components/internal/HomePage/HeroSection";
import Properties from "./components/internal/HomePage/Properties";
import { BasicInfo, FormWrapper } from "./components/internal/HostPage/Parts";
import { Children } from "react";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      {/* <Header /> */}
      <HeroSection />
      <div className="bg-white rounded-lg w-[85%] px-6 py-4 mx-auto shadow">
        <Properties />
      </div>
    </main>
  );
}
