"use strict";

const results = new Array(5).fill(0);

const displayVotingResults = () => {
  const voteResults = document.querySelectorAll(".vote-result");
  voteResults.forEach((item, index) => {
    item.innerHTML = results[index];
  });
};

const handleVoting = () => {
  const votes = Array.from(document.querySelectorAll(".vote"));

  votes.forEach(vote => {
    vote.addEventListener("click", function(e) {
      const index = votes.indexOf(e.target);

      results[index] += 1;

      displayVotingResults();
    });
  });
};

displayVotingResults(); // display default values "0";
handleVoting();
