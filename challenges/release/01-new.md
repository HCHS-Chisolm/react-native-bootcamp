# React Native Release

## 📡 What you will learn

- Using Expo Application Service
- Generate a build and try our app without Expo Go.

Identify the differents areas of the Expo Ecosystem:

- Project bootstrapping / run 👉 Expo CLI
- Adding new features 👉 Expo SDK
- Building and Signing 👉 EAS Build
- Submitting 👉 EAS Submit
- Hotfixes 👉 EAS Update

## 👾 Before we start the exercise

Visit [https://expo.dev](https://expo.dev) and Sign up to start using EAS. The free plan already includes everything you need if you are an indie hacker working on your own apps.

## 👨‍🚀 Exercise 1

### Setup

To use EAS, you will need to install the `eas-cli` package globally. Go to your terminal and run the following command.

```console
npm i -g eas-cli
eas login
```

#### Init

```console
eas init
✔ Linked to project @weshipit/spacecraft
✔ Linked app.json to project with ID 012aaaa3-4ce5-4bae-9f4d-2f842489f07a
```

### Build

Create [your first build](https://docs.expo.dev/build/setup/)

```
eas build:configure
```


```console
eas build
✔ Select platform › Android
✔ Linked to project @weshipit/spacecraft
✔ Using remote Android credentials (Expo server)
```

⌛ 30 min

On your Expo account, you should have someting like this:

![Expo internal distribution build done](https://raw.githubusercontent.com/flexbox/react-native-workshop/main/challenges/release/ios-build-done.png)

### Submitting your app to the store

```console
eas submit
✔ Select platform › Android
✔ Linked to project @weshipit/spacecraft
```

EAS will use your latest build for the submission by default, but you can manually specify a previous build if you want.

If you are stuck, run `eas submit --help` from the terminal to get informations.
