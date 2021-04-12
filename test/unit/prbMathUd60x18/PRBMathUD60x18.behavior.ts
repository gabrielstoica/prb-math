import shouldBehaveLikeAvg from "./pure/avg";
import shouldBehaveLikeCeil from "./pure/ceil";
import shouldBehaveLikeDiv from "./pure/div";
import shouldBehaveLikeExp from "./pure/exp";
import shouldBehaveLikeExp2 from "./pure/exp2";
import shouldBehaveLikeFloor from "./pure/floor";
import shouldBehaveLikeFrac from "./pure/frac";
import shouldBehaveLikeGm from "./pure/gm";
import shouldBehaveLikeInv from "./pure/inv";
import shouldBehaveLikeLn from "./pure/ln";
import shouldBehaveLikeLog10 from "./pure/log10";
import shouldBehaveLikeLog2 from "./pure/log2";
import shouldBehaveLikeMul from "./pure/mul";
import shouldBehaveLikePow from "./pure/pow";
import shouldBehaveLikeSqrt from "./pure/sqrt";

export function shouldBehaveLikePrbMathUd60x18(): void {
  describe("Pure Functions", function () {
    describe("avg", function () {
      shouldBehaveLikeAvg();
    });

    describe("ceil", function () {
      shouldBehaveLikeCeil();
    });

    describe("div", function () {
      shouldBehaveLikeDiv();
    });

    describe("exp", function () {
      shouldBehaveLikeExp();
    });

    describe("exp2", function () {
      shouldBehaveLikeExp2();
    });

    describe("floor", function () {
      shouldBehaveLikeFloor();
    });

    describe("frac", function () {
      shouldBehaveLikeFrac();
    });

    describe("gm", function () {
      shouldBehaveLikeGm();
    });

    describe("inv", function () {
      shouldBehaveLikeInv();
    });

    describe("ln", function () {
      shouldBehaveLikeLn();
    });

    describe("log10", function () {
      shouldBehaveLikeLog10();
    });

    describe("log2", function () {
      shouldBehaveLikeLog2();
    });

    describe("mul", function () {
      shouldBehaveLikeMul();
    });

    describe("pow", function () {
      shouldBehaveLikePow();
    });

    describe("sqrt", function () {
      shouldBehaveLikeSqrt();
    });
  });
}