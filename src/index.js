export default function({ Plugin, types: t }) {
  return new Plugin("foo", {
    visitor: {
      // your visitor methods go here
    }
  });
}