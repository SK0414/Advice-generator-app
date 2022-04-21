import React, { FC, ReactChild, ReactNode } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Head from "next/head";
import { NextPage } from "next/types";
import styled from "@emotion/styled";
import Dice from "@/public/assets/icons/Dice.svg";

const Card = styled.section`
  position: relative;
  padding: 50px 50px 70px 50px;
  width: 540px;
  background: ${({ theme }) => theme.colors.darkGrayishBlue};
  border-radius: 15px;
  transition: all 0.3s;

  .cardTitle {
    text-align: center;
    color: ${({ theme }) => theme.colors.neonGreen};
    letter-spacing: 2px;
  }

  .cardContent {
    margin-top: 25px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.lightCyan};
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    word-break: keep-all;
  }

  @media (max-width: 720px) {
    width: 340px;
  }
`;

const Divider = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    border: 1px solid #4f5d74;
  }

  .dividerWrap {
    position: absolute;
    display: flex;
    padding: 0 16px;
    right: calc(50% - 26px);
    top: -7px;
    background-color: ${({ theme }) => theme.colors.darkGrayishBlue};

    .dividerIcon {
      display: inline-block;
      width: 6px;
      height: 16px;
      background: ${({ theme }) => theme.colors.lightCyan};
      border-radius: 3px;
    }
  }
`;

const ResetButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(50% - 32px);
  bottom: -32px;
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.neonGreen};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 0px 30px ${({ theme }) => theme.colors.neonGreen};
  }
`;

const Advice: NextPage = () => {
  const fetchData = async () => {
    return await axios.get("https://api.adviceslip.com/advice");
  };

  const { data, error, refetch, isError, isLoading, isFetching } = useQuery("getAdvice", fetchData, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Head>
        <title>Advice Generator</title>
      </Head>
      <Card>
        {isError ? (
          <div className="cardContent">Error</div>
        ) : isLoading || isFetching ? (
          <div className="cardContent">Loading...</div>
        ) : (
          <>
            <div className="cardTitle">ADVICE # {data?.data.slip.id}</div>
            <div className="cardContent">&quot;{data?.data.slip.advice}&quot;</div>
          </>
        )}
        <Divider>
          <div className="dividerWrap">
            <div className="dividerIcon" />
            <div className="dividerIcon" style={{ marginLeft: "8px" }} />
          </div>
        </Divider>
        <ResetButton onClick={() => refetch()}>
          <Dice />
        </ResetButton>
      </Card>
    </>
  );
};

export default Advice;
