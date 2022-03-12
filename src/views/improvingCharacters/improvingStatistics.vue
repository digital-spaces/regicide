<script setup lang="ts">
import ForExample from '../../components/ForExample.vue';
</script>

<template>
  <section id="improvingStatistics">
    <h2>Improving Statistics</h2>

    <h3>Improving Skills</h3>
    <p>Characters improve skills by learning from failure. A Trained skill requires 10 failures to improve by one point. An untrained skill requires 15 failures to improve by one point.</p>
    <p>There is 100% limit to the score a skill can reach. Skills can only be improved above 100% through magic.</p>

    <h4>Improving Outside of Quests: Practice &amp; Research</h4>
    <p>The characters may often experience long stretches of ‘downtime’ between Quests. This is quite normal. Group members may need to heal from wounds suffered during the last Quest, the characters may engage in some activity that takes time, or life may simply return to normal until the next danger to face the player characters appears.</p>
    <p>During such downtime the characters may improve their characters.  The players might actually request downtime between Quests to learn new skills and it is up to the Games Master to determine if this is appropriate.</p>
    <p>For each one week period of practice or research and 10 x current skill percentage gold pieces, a character may improve a skill by one percent. A character may not improve a skill above the value of its key Characteristic using this method, and cannot improve a skill by more than 5% per level. Trained skill increases from practice and research do not contribute towards leveling up or towards improving Characteristics.</p>

    <div class="optional">
      <h4>Close Combat Skills Greater Than 100% (Optional)</h4>
      <p>Normally, no skill can be raised above 100%. As an optional rule, a character with over 100% (by way of skill fortification or removing the 100% maximum) can split his skill to perform multiple attacks and parries or dodges.</p>
      <p>For combat attacks at over 100% in the weapon skill the number of attacks and the allocated % of each one must be declared at the start of the combat round. Any allocation of split is allowed.</p>
      <ForExample>Murgan, the Mighty, with an Axe skill of 120% can split it 90% /30% or make four attacks at four opponents in range at 30% each.</ForExample>
      <p>Divide the character’s Dexterity by the number of attacks to find when attacks occur in the Dexterity sequence. First attack is at normal Dexterity and then subsequent attacks are at intervals of Dexterity divided by the number of attacks.</p>
      <ForExample>Murgan, with a Dexterity 50, splits his attack to make two attacks. Therefore the first attack occurs at Dexterity 50 and the second at Dexterity 25.</ForExample>
      <p>Parries and Dodges do not need to be declared at the start of combat round but careful track must be kept of how many have already been used.</p>
      <ForExample>Murgan parries one of his attackers and chooses to use 75% of his skill. This means that he has 45% left to parry the next attacker in the same round.</ForExample>
    </div>

    <h3>Improving Characteristics</h3>
    <p>A player who increases any combination of his Trained skills by 10 points (total, among all Trained skill improvements) increases in level and can improve three of his Characteristics. Each Characteristic is improved by half the number of skill increases (Trained and untrained) for skills based on that Characteristic (minimum +1, maximum +5).</p>
    <ForExample>Rurik improved his Long Sword (a Trained skill) and Acrobatics (an untrained skill) skills by 5 percent each between levels 1 and 2. If he elects to improve his Strength Characteristic when he levels up, it will improve by 5 points.</ForExample>
    <p>The maximum a character can increase a Characteristic to is 100. Characteristics can only be improved above 100 through magic.</p>

    <h3>Improving Attributes</h3>
    <p>A character increases his Hit Points by his CON and his Magic Points by his INT each level. All other Attributes increase through spending improvement points on Characteristics to increase the Characteristic modifier for that Attribute.</p>

    <div class="optional">
      <h3>Aging (Optional)</h3>
      <p>Many Games Masters will not want to bother with the effects of aging on Adventurers. They are heroes, after all. Depending on constitution, diet and exercise, some older characters (if they avoid disease, infection, being worked to death or killed in combat) may retain a robust vitality, in contrast to younger, sickly types. But, the hard fact is that as we age it is harder to retain muscle mass, and at some point physical and mental faculties will become eroded. Furthermore, some Games Masters might like to run campaigns that pick up the exploits of an adventuring party in between long periods of downtime.</p>
      <p>For those wanting to simulate the effects of aging, the following optional rules can be applied:</p>
      <p>At age 40 (for humans and catfolk) or age 400 (for elves and lizardfolk), and then again after every 5 years (for humans and catfolk) or 50 years (for elves and lizardfolk), a Constitution roll should be made. If the roll is failed then the Adventurer loses 5 points from a physical Characteristic. Roll D5 to determine which: 1-STR, 2-CON, 3-DEX, 4-QUI or 5-none.</p>
      <p>In addition, at age 50 (for humans and catfolk) or age 500 (for elves and lizardfolk), and then again after every 5 years (for humans and catfolk) or 50 years (for elves and lizardfolk), an Intelligence roll should also be made for the remaining Characteristics. If the roll is failed the Adventurer loses 5 points from INT, POW or CHA. Roll D5 to determine which: 1-INT, 2-POW, 3-CHA or 4/5-none.</p>
      <p>Adventurers may still restore or raise Characteristics that have suffered the effects of aging, in the usual way, by leveling up.</p>
    </div>
  </section>
</template>

<style>
</style>
