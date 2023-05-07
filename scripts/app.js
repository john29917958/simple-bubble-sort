"use strict";

(function () {
    let nums = [7, 2, 8, 3, 12];
    let initialNums = JSON.parse(JSON.stringify(nums));
    let numsDisplayArea, sortButton, resetButton;
    document.addEventListener("DOMContentLoaded", function () {
        getElemsAndSaveIt();
        initElements();
    });

    function getElemsAndSaveIt() {
        numsDisplayArea = document.getElementById("nums-display-area");
        sortButton = document.getElementById("sort-button");
        resetButton = document.getElementById("reset-button");
    }

    function initElements() {
        applyMaterializeCss();
        initNumsDisplayArea();
        initSortButton();
        initResetButton();
    }

    function applyMaterializeCss() {
        M.AutoInit();
    }

    function initNumsDisplayArea() {
        numsDisplayArea.innerText = nums.toString();
    }

    function initSortButton() {
        sortButton.onclick = handleSortButtonClickedEvt;
    }

    function initResetButton() {
        resetButton.onclick = handleResetButtonClickedEvt;
    }

    function handleSortButtonClickedEvt() {
        nums = sort(nums);
        numsDisplayArea.innerText = nums.toString();
        M.toast({
            html: "Numbers has been sorted!"
        });
    }

    function handleResetButtonClickedEvt() {
        nums = initialNums;
        numsDisplayArea.innerText = nums.toString();
        M.toast({
            html: "Numbers has been reset!"
        });
    }

    function sort(nums) {
        let numsToSort = JSON.parse(JSON.stringify(nums));
        let isAnySortingThisRound = false;
        do {
            isAnySortingThisRound = false;
            for (let i = 0; i < numsToSort.length - 1; i++) {
                if (isNumsCurrElemGreaterThanNext(numsToSort, i)) {
                    isAnySortingThisRound = true;
                    swap(numsToSort, i, i + 1);
                }
            }
        } while (isAnySortingThisRound);
        return numsToSort;
    }

    function isNumsCurrElemGreaterThanNext(nums, currIndex) {
        let isCurrElemGreaterThanNext = nums[currIndex] > nums[currIndex + 1];
        return isCurrElemGreaterThanNext;
    }

    function swap(nums, firstElemIndex, secElemIndex) {
        let originFirstElemVal = nums[firstElemIndex];
        nums[firstElemIndex] = nums[secElemIndex];
        nums[secElemIndex] = originFirstElemVal;
    }
})();
