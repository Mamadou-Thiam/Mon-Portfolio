#!/bin/bash
cd /d/MES_PROJETS/My_App
git checkout main
git reset --hard 81d0b24
git push -f origin main
echo "Push completed"
