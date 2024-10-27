<script setup lang="ts">

import { errorMessages } from 'vue/compiler-sfc';
import type { LoginFromState,LoginResponse } from '~/interfaces';

// --------------------
// ページ遷移
// --------------------

    const goResetPage = ():any => {
        return navigateTo('/login/reset');
    };

    const goSignupPage = ():any => {
        return navigateTo('/signup')
    };

// --------------------
// エラーメッセージ
// --------------------

    const loginResponse = reactive<LoginResponse>({
        emailErrorMessage: "",
        passwordErrorMessage: "",
        authErrorMessage:  "",
    })

// --------------------
// ログイン機能
// --------------------

    const formState = reactive<LoginFromState>({
        email: "",
        password: "",
    });

    const loginUser = async () => {
        const emailRegex:RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex:RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(emailRegex.test(formState.email)&&passwordRegex.test(formState.password)){
            try {
                const asyncData = await useFetch("/user-management/userAuth",
                    {
                        method: "get",
                        body: formState,
                    }
                );
                if(asyncData){
                    navigateTo('/home')
                };
            } catch(error) {
                loginResponse.authErrorMessage = "登録のメールアドレス、パスワードは存在しません";
                confirm(loginResponse.authErrorMessage);
                loginResponse.authErrorMessage = "";
            };
        }else{
            if(!emailRegex.test(formState.email)){
                loginResponse.emailErrorMessage = "メールアドレスの形式が無効です";
            };
            if(!passwordRegex.test(formState.password)){
                loginResponse.passwordErrorMessage = "パスワードの形式が無効です";
            };
        };
    };


</script>


<template>
    <div class="w-[360px] h-[500px] bg-_white rounded-lg flex justify-center items-center">
        <div class="w-[280px] h-[400px]">
            <div class="w-[100%] h-[100px] flex justify-center items-center">
                <div class="text-[20px]">おうち<br>財産帳</div>
            </div>
            <div class="w-[100%] h-[40px] flex justify-center items-center">
                <div class="text-[20px]">ログイン</div>
            </div>
            <div class="w-[100%] h-[20px] flex justify-center items-center">
                <div class="text-[14px]">登録情報を入力してください</div>
            </div>
            <div class="w-[100%] h-[40px]"></div>
            <div class="w-[100%] h-[30px] bg-_gray">
                <a-input
                    v-model:value="formState.email"
                    style="width: 100%;"
                    placeholder="メールアドレスを入力"
                ></a-input>
            </div>
            <div class="w-[100%] h-[20px] pt-[4px] text-[8px] text-_dBlue">{{ loginResponse.emailErrorMessage }}</div>
            <div class="w-[100%] h-[30px] bg-_gray">
                <a-input-password
                    v-model:value="formState.password"
                    style="width: 100%;"
                    placeholder="パスワードを入力"
                ></a-input-password>
            </div>
            <div class="w-[100%] h-[20px] pt-[4px] text-[8px] text-_dBlue">{{ loginResponse.passwordErrorMessage }}</div>
            <div class="w-[100%] h-[30px] flex items-center">
                <a-button type="link" @click="goResetPage()">パスワードを忘れてしまった場合</a-button>
            </div>
            <div class="w-[100%] h-[20px]"></div>
            <div class="w-[100%] h-[30px] flex">
                <div class="w-[70%] h-[30px] flex items-center">
                    <a-button type="link" style="color: #7B7B7B;" @click="goSignupPage()">初めての場合</a-button>
                </div>
                <div class="w-[30%] h-[30px]">
                    <a-button type="primary" style="width: 80px;" @click="loginUser()">次へ</a-button>
                </div>
            </div>
        </div>
    </div>
</template>